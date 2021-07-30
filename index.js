function convert(a) {
    const mod = a % 10;
    return mod === 1 ? 'I' : mod === 2 ? 'II' : mod === 3 ? 'III' : '';
}

module.exports = convert;