export default class {
    constructor(params) {
        this.params = params;
        /*  
          this.url = 'in root url here';
          this.convertDate = date => {
              return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours() + 1}:${date.getMinutes()} `
          } */
        console.log(params)
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }


    async executeViewScript() {

    }
}

