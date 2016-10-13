let [username, comment] = process.argv.slice(2);

function html(strings, ...args) {
    let escape = (string) => {
        return string
            .replace(/&/g, '&amp;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    return strings.reduce((result, string, index) => {
        return result + string + escape(args[index] || '');
    }, '');
}

console.log(html`<b>${username} says</b>: "${comment}"`);
