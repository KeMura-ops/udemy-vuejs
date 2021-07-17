// ミックスインによってexport-default以下の同じコード(オプション)を共有化し再利用できる

export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Kanagawa",
      subTitle: "Kanagawa is a great city",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};