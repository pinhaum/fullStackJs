module.exports = {
  get AU_IN_KM() {
    return 149587870;
  },

  convertAUtoKm(au) {
    return au * this.AU_IN_KM;
  },
};
