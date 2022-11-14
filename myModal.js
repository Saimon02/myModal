function myModal(settings) {
	check_bootstrap_version();
	return generatemyModal(settings);
}

function generatemyModal(settings) {
	//create modal
	let my_modal = createModal();

	//get/set parameters
	if (settings != null && settings != undefined)
		my_modal = applies_parameters(my_modal, settings);

	assemblingModal(my_modal);

	return my_modal;
}

//--create the modal
function createModal() {
	let bootstrap_version = bootstrap.Tooltip.VERSION;
	let default_title_dimension = 5;

	var my_modal = {};
	my_modal.modal = generateHTMLmainModal(bootstrap_version);
	my_modal.dialog = generateHTMLdialog(bootstrap_version);
	my_modal.content = generateHTMLcontent(bootstrap_version);
	my_modal.title = generateHTMLtitle(default_title_dimension, bootstrap_version);
	my_modal.main_header = generateHTMLmainheader(bootstrap_version);
	my_modal.header = generateHTMLheader(bootstrap_version)
	my_modal.body = generateHTMLbody(bootstrap_version);
	my_modal.footer = generateHTMLfooter(bootstrap_version);
	my_modal.bootstrap_version = bootstrap_version;

	return my_modal;
}

function assemblingModal(my_modal) {
	//assembling the modal html and assign to modal

	$(my_modal.header).append(my_modal.title);
	$(my_modal.main_header).append(my_modal.header);
	$(my_modal.content).append(my_modal.main_header);
	$(my_modal.content).append(my_modal.body);
	$(my_modal.content).append(my_modal.footer);
	$(my_modal.dialog).append(my_modal.content);
	$(my_modal.modal).append(my_modal.dialog);
}

function applies_parameters(my_modal, settings) {
	//legend:
	//my_modal.modal -> div_modal	
	//my_modal.dialog -> div_modal_dialog (set the type)
	//my_modal.content -> div_modal_content
	//my_modal.header -> div_modal_header (set content to header)
	//my_modal.body -> div_modal_body (set content to body)
	//my_modal.footer -> div_modal_footer (set content to footer)

	//setting parameters to modal

	//adding classes
	if (settings.modal != undefined && settings.modal != '')
		if (settings.modal.classes != undefined && settings.modal.classes != "")
			$(my_modal.modal).addClass(settings.modal.classes);

	if (settings.modal_type != undefined && settings.modal_type != "") {
		//set modal-fullscreen for version of bootstrap <= 4,
		//--because the class 'modal-fullscreen' was implemented by bootstrap devolopers from version five and then
		if (settings.modal_type == 'modal-fullscreen' && parseInt(bootstrap.Tooltip.VERSION) <= 4) {
			$(my_modal.modal).css({ 'min-width': '100%', margin: '0', 'z-index': '9999' });
			$(my_modal.content).css({ 'min-height': '100vh' });
			$(my_modal.dialog).css({ 'min-width': '100%', margin: '0' });
		} else
			$(my_modal.dialog).addClass(settings.modal_type);
	}

	if (settings.title != undefined && settings.title != "") {
		//default size
		let size = '5';

		//control and get the size of the title
		if (settings.title_size != undefined && settings.title_size != "") {
			if (parseInt(settings.title_size.toString()) > 0 && parseInt(settings.title_size.toString()) < 7)
				size = settings.title_size.toString();
		}

		//set title 
		my_modal.title = generateHTMLtitle(size);
		$(my_modal.title).text(settings.title).trigger("change");
	}

	if (settings.content_header != undefined && settings.content_header != "")
		$(my_modal.header).append(settings.content_header);

	if (settings.content_body != undefined && settings.content_body != "")
		$(my_modal.body).append(settings.content_body);

	if (settings.content_footer != undefined && settings.content_footer != "")
		$(my_modal.footer).append(settings.content_footer);

	//adding attributes
	if (settings.modal != undefined && settings.modal != '')
		$(my_modal.modal).attr({
			role: "dialog",
			tabindex: "-1",
			id: settings.modal.id != undefined && settings.modal.id != "" ? settings.modal.id : '',
			"aria-labelledby": settings.modal.aria_labelledby != undefined && settings.modal.aria_labelledby != "" ? settings.modal.aria_labelledby : '',
			"aria-hidden": "true",
		});

	$(my_modal.dialog).attr("role", "document");

	//return the object
	return my_modal;
}

function check_bootstrap_version() {
	last_bootstrap_version = 4;
	if (parseInt(bootstrap.Tooltip.VERSION) != 4)
		console.warn("myModal warning: the version of bootstrap is not the latest used.");
}

//--create html functions
function generateHTMLmainModal(bootstrap_version) {

	//generate modal
	let div_modal = $(document.createElement("div"));

	//adding classes
	$(div_modal).addClass("modal fade");

	return div_modal;
}

function generateHTMLdialog(bootstrap_version) {
	//generate modal_dialog
	let div_modal_dialog = $(document.createElement("div"));

	//adding classes
	$(div_modal_dialog).addClass("modal-dialog");

	return div_modal_dialog;
}

function generateHTMLcontent(bootstrap_version) {
	//generate modal_content
	let div_modal_content = $(document.createElement("div"));

	//adding classes
	$(div_modal_content).addClass("modal-content");

	return div_modal_content;
}

function generateHTMLmainheader(bootstrap_version) {
	//generate modal_main_header
	let div_modal_main_header = $(document.createElement("div"));

	//adding classes
	$(div_modal_main_header).addClass("modal-header");

	let btn_close = $(document.createElement('button'));
	$(btn_close).addClass('close');
	$(btn_close).attr({ 'data-dismiss': 'modal', 'aria-label': 'Close' });
	let span_btn = $(document.createElement('span'));
	$(span_btn).attr('aria-hidden', 'true');
	$(span_btn).html('&times;');
	$(btn_close).append(span_btn);

	$(div_modal_main_header).append(btn_close);

	return div_modal_main_header;
}

function generateHTMLtitle(size, bootstrap_version) {
	//generate modal title ( Default is empty, the dimension is h5 and visible)

	let title = $(document.createElement('h' + size));

	return title;
}

function generateHTMLheader(bootstrap_version) {
	//generate modal_header
	let div_modal_header = $(document.createElement("div"));

	//fix position of modal header content
	$(div_modal_header).css("position", "absolute");

	return div_modal_header;
}

function generateHTMLbody(bootstrap_version) {
	//generate modal_body
	let div_modal_body = $(document.createElement("div"));

	//adding classes
	$(div_modal_body).addClass("modal-body");

	return div_modal_body;
}

function generateHTMLfooter(bootstrap_version) {
	//generate modal_footer
	let div_modal_footer = $(document.createElement("div"));

	//adding classes
	$(div_modal_footer).addClass("modal-footer");

	return div_modal_footer;
}
//end