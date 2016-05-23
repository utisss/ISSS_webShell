var Terminator = function(element, config) {
    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'text');
    hiddenField.style.display = 'none';
    document.body.appendChild(hiddenField);
    
    this.element = element;
    this.hiddenField = hiddenField;
    this.config = config || {};
};

Terminator.prototype.prompt = function(prefix) {
    prefix = prefix || this.config.prefix || '~$';
    var promptWrapper = document.createElement('span');
    promptWrapper.textContent = prefix;
    
    this.element.appendChild(promptWrapper);
}