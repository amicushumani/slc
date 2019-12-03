class Crawl {
  constructor() {
    console.log('Crawl.ts constructor was called');
  }

  crawl = async () => {
    const sites = [
      'https://www.google.com/adsense/start/benefits/',
      'https://affiliate-program.amazon.com/'
    ];
    for await (let i of sites) {
      console.log('for await');
    }
  };
}
