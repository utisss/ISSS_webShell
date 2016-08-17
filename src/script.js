var main = new Terminator(document.getElementById('contentWrapper'), 
            { 
                prefix: '<span class="green">isss@utexas</span>:<span class="red">~$</span> ',
                alwaysFocus: true,
                autoScroll: (window.innerWidth >= 600)
            });

window.onresize = function() {
    console.log("Resizing!");
    if (window.innerWidth >= 600) {
        main.config.autoScroll = true;
    } else {
        main.config.autoScroll = false;
    }
};
            
function printClass(term, className) {
    var cloneTarget = null;
    if (className && (cloneTarget = document.getElementsByClassName(className))) {
        if (cloneTarget[0]) {
            term.writeHTML(cloneTarget[0].innerHTML);
        } else {
            term.writeLine("cat: " + className + ": No such file or directory");
        }
    }
}

main.register(function(term, command) {
    term.writeLine('welcome.txt');
    term.writeLine('officers.txt');
    term.writeLine('contact.txt');
    term.writeLine('sponsor.txt');
    term.writeLine('nuclear_launch_codes.txt');
    term.prompt();
}, 'ls');
			
main.register(function(term, command) {
    command = command.split(' ');
    var arg = command[1] || '';
    if (arg.indexOf('.txt') !== -1
        && arg.indexOf('.txt') === (arg.length - 4))
        arg = arg.substring(0, arg.indexOf('.txt'));
        
    printClass(term, arg);
    term.prompt();
    return;
}, 'cat');

main.register(function(term, command) {
	printClass(term, 'officers');
	term.prompt();
	return;
}, 'officers');

main.register(function(term, command) {
	printClass(term, 'contact');
	term.prompt();
	return;
}, 'contact');

main.register(function(term, command) {
	printClass(term, 'help');
	term.prompt();
	return;
}, ['help', 'man']);

main.register(function(term, command) {
    printClass(term, 'git');
    term.prompt();
    return;
}, 'git');

main.register(function(term, command) {
    printClass(term, 'sponsor');
    term.prompt();
    return;
}, ['sponsor', 'sponsors']);

main.register(function(term, command) {
    term.writeLine('Redirecting to the Facebook group...');
    setTimeout(function() {
        window.location = 'https://www.facebook.com/groups/utisss/';
        term.prompt();
    }, 750);
}, ['fb', 'facebook']);

main.register(function(term, command) {
    term.writeLine('Redirecting to the mailing list subscription page...');
    setTimeout(function() {
        window.location = 'https://utlists.utexas.edu/sympa/subscribe/isss';
        term.prompt();
    }, 750);
}, ['mail', 'sub', 'subscribe']);

main.register(function(term, command) {
    term.writeLine('Redirecting to the mailing list unsubscribe page...');
    setTimeout(function() {
        window.location = 'https://utlists.utexas.edu/sympa/sigrequest/isss';
        term.prompt();
    }, 750);
}, ['unsub', 'unsubscribe']);

main.register(function(term, command) {
	term.writeLine('/utexas/utcs/orgs/isss');
	term.prompt();
}, 'pwd');

main.register(function(term, command) {
	term.element.innerHTML = '';
	term.prompt();
}, 'clear');

main.register(function(term, command) {
    term.writeLine('This user is not in the cders file. This incident has been reported.');
    term.prompt();
}, 'cd');

main.register(function(term, command) {
    term.writeLine('isss');
    term.prompt();
}, 'whoami');

main.register(function(term, command) {
    term.writeLine(command.split(' ').slice(1).join(' '));
    term.prompt();
}, 'echo');

main.register(function(term, command) {
    var contentWrapper = document.getElementById('contentWrapper');
    contentWrapper.classList.toggle('hacker');
    term.writeLine('Hacker mode: ' + (contentWrapper.classList.contains('hacker') ? 'ENABLED' : 'DISABLED'));
    term.prompt();
}, ['hack', 'hacker']);

main.prompt();
main.autoType('cat welcome.txt', 1000);