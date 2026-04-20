function asd() {
    console.log('asd');
}

function qwe() {
    console.log('qwe');
}

function zxc() {
    console.log('zxc');
    qwe();
}

export const exportObject = {
    asd: asd,
    zxc
};
