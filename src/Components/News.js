import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {


  acticles = [
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "abrower@insider.com (Alison Brower)",
      "title": "The Sundance Film Festival deal scene was cool, but debates were hot about a Brett Kavanaugh documentary, the brutality of 'Magazine Dreams,' and the sexual politics of 'Cat Person'",
      "description": "Back in person for the first time since 2020, the Sundance Film Festival was brimming with hot titles, A-list stars, and raucous crowds.",
      "url": "https://www.businessinsider.com/sundance-film-festival-best-movies-deals-brett-kavanaugh-steph-curry-2023-1",
      "urlToImage": "https://i.insider.com/63d5e1d2fc18470019553c12?width=1200&format=jpeg",
      "publishedAt": "2023-02-06T02:00:35Z",
      "content": "It was impossible not to feel optimistic about the state of independent film at the opening weekend of the Sundance Film Festival. \r\nBack in person for the first time since 2020, the fest was brimmin… [+5756 chars]"
    },
    {
      "source": { "id": null, "name": "HuffPost" },
      "author": "Curtis M. Wong",
      "title": "Sam Smith And Kim Petras Take Grammys To Hell With Fiery Performance Of ‘Unholy’",
      "description": "The history-making duo were introduced by Madonna, who credited them with “forging a new path and taking the heat for all of it.”",
      "url": "https://www.huffpost.com/entry/sam-smith-kim-petras-grammys-2023-unholy-performance_n_63e06afae4b01a4363956e2a",
      "urlToImage": "https://img.huffingtonpost.com/asset/63e071652200002f00453ff9.jpeg?cache=RRhRXkI3wk&ops=1200_630",
      "publishedAt": "2023-02-06T04:46:56Z",
      "content": "Sam Smith and Kim Petras followed up their history-making Grammys victory on Sunday with an epic performance of their smash single, Unholy. \r\nSmith began the number in red leather, flanked by a troup… [+2344 chars]"
    },
    {
      "source": { "id": null, "name": "AppleInsider" },
      "author": "news@appleinsider.com (Christine McKee)",
      "title": "AirPods Pro 2 on sale for $199: the ultimate earbuds experience at a discount",
      "description": "Transform your audio experience with Apple AirPods Pro 2 that are on sale for $199.99 at Amazon. With superior noise cancellation, a comfortable fit and improved sound quality, these earbuds are the perfect choice at $50 off.Apple AirPods Pro 2 are $50 off.Ap…",
      "url": "https://appleinsider.com/articles/23/02/06/airpods-pro-2-on-sale-for-199-the-ultimate-earbuds-experience-at-a-discount",
      "urlToImage": "https://photos5.appleinsider.com/gallery/52846-105737-airpods-pro-2-199-xl.jpg",
      "publishedAt": "2023-02-06T02:35:13Z",
      "content": "Apple AirPods Pro 2 are $50 off.\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nTransform your audio experience with Apple AirPods Pro 2 that are on sale… [+3494 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo.jp" },
      "author": "そうこ",
      "title": "Mac整備済製品の苦悩。Apple T2チップが原因でまだ使える端末がゴミに",
      "description": "リファービッシュ版＝整備済製品のMacには最近悩みの種が…。端末初期化しても、元の持ち主がログインして適切な初期化をしてくれないと使えないという問題が起きているんです。原因はApple（アップル）のT2セキュリティチップ。",
      "url": "https://www.gizmodo.jp/2023/02/macbook-t2-security-chip-used-macbook-apple.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/02/04/230204macbook.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2023-02-06T03:00:00Z",
      "content": "Copyright © mediagene Inc. All Rights Reserved."
    },
    {
      "source": { "id": null, "name": "CNET" },
      "author": "Nina Raemont",
      "title": "The 2023 Grammy Awards Just Finished: Here's the Full List of Winners - CNET",
      "description": "The winners of Best New Artist, Album of the Year and Song of the Year on music's biggest night.",
      "url": "https://www.cnet.com/culture/entertainment/the-2023-grammy-awards-just-finished-heres-the-full-list-of-winners/",
      "urlToImage": "https://www.cnet.com/a/img/resize/c99320920bb485c3246d7687d3aaf5162be58c2c/hub/2023/02/06/b365b030-5924-48be-bec2-d19bfbd7760d/gettyimages-1463285606.jpg?auto=webp&fit=crop&height=630&precrop=2665,1632,x326,y94&width=1200",
      "publishedAt": "2023-02-06T04:41:00Z",
      "content": "The 65th annual Grammy Awards ceremony is done and dusted. The music awards show finished up on Sunday, with Harry Styles, Lizzo, Steve Lacy and more busting out performances.\r\nBeyoncé made headlines… [+40652 chars]"
    },
    {
      "source": { "id": null, "name": "Yanko Design" },
      "author": "Sarang Sheth",
      "title": "Enter Now! The 2023 International Design Excellence Awards (IDEA) is Open for Submissions",
      "description": "Enter Now! The 2023 International Design Excellence Awards (IDEA) is Open for SubmissionsThe International Design Excellence Award (IDEA) has been bestowed upon some of the most innovative products in the world, like the iPhone, MacBook Pro, Tesla...",
      "url": "https://www.yankodesign.com/2023/02/05/enter-now-the-2023-international-design-excellence-awards-idea-is-open-for-submissions/",
      "urlToImage": "https://www.yankodesign.com/images/design_news/2023/01/enter-now-the-2023-international-design-excellence-awards-idea-is-open-for-submissions/idea_awards_2023_call_for_entries_1.jpg",
      "publishedAt": "2023-02-06T02:45:49Z",
      "content": "The International Design Excellence Award (IDEA) has been bestowed upon some of the most innovative products in the world, like the iPhone, MacBook Pro, Tesla Model S, Oculus Rift, and the Xbox. Now … [+11378 chars]"
    },
    {
      "source": { "id": null, "name": "Destructoid" },
      "author": "CJ Andriessen",
      "title": "Assassin’s Creed Valhalla: Dawn of Ragnarok wins inaugural video game Grammy",
      "description": "Better luck next year, Extreme Paintbrawl\nTonight is the biggest night and music, and for composer Stephanie Economou, it might be one of the biggest nights of her career. The seasoned musician was one of five people up for a Grammy this year for video game m…",
      "url": "https://www.destructoid.com/assassins-creed-grammy-win-stephanie-economou/",
      "urlToImage": "https://www.destructoid.com/wp-content/uploads/2023/02/AC_Valhalla_Dawn_Of_Ragnarok_Grammy.jpg",
      "publishedAt": "2023-02-06T00:19:37Z",
      "content": "Tonight is the biggest night and music, and for composer Stephanie Economou, it might be one of the biggest nights of her career. The seasoned musician was one of five people up for a Grammy this yea… [+1430 chars]"
    },
    {
      "source": { "id": null, "name": "Ifanr.com" },
      "author": "何, 嘉昕",
      "title": "早报 | ​iPhone 16 Ultra 或无端口/集成 ChatGPT 的 Bing 曝光/人人视频遭 Netflix 等起诉",
      "description": "特斯拉上调美国 Model Y 售价\n消息称蔚来手机已开始抽取内测名额#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1534014",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/02/7-4.jpg",
      "publishedAt": "2023-02-06T00:23:26Z",
      "content": "<ul><li>iPhone 16 Ultra </li><li> ChatGPT-4 Bing </li><li></li><li></li><li> Model Y </li><li></li><li></li><li> USB 3.X</li><li> Galaxy S23 Ultra 30%</li><li>iPhone 14 Pro 700 </li><li> 900ml </li><… [+1375 chars]"
    },
    {
      "source": { "id": null, "name": "Touchlab.jp" },
      "author": "Nakimo",
      "title": "【15%OFF】3台同時急速充電「Anker 737 Power Bank 24000mAh」がクーポンセール中",
      "description": "楽天お買い物マラソンで、モバイルバッテリー「Anker 737 Power Bank 24000mAh」の15%OFFクーポンセールが開催されています。 このバッテリーの主な特徴は次のとおり： 最大140Wの超高出力 2 […]\nThe post 【15%OFF】3台同時急速充電「Anker 737 Power Bank 24000mAh」がクーポンセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
      "url": "http://touchlab.jp/2023/02/anker_737_powerbank_sale_2023feb6/",
      "urlToImage": "http://touchlab.jp/wp-content/uploads/2023/02/rakuten_marathon_2023feb_anker_1.jpg",
      "publishedAt": "2023-02-06T01:38:02Z",
      "content": "楽天お買い物マラソンで、モバイルバッテリー「Anker 737 Power Bank 24000mAh」の15%OFFクーポンセールが開催されています。\nこのバッテリーの主な特徴は次のとおり：\n<ul>\n<li>最大140Wの超高出力</li>\n<li>24,000mAhの大容量</li>\n<li>スマートディスプレイ</li>\n<li>3台同時充電</li>\n<li>スリム設計</li>\n<l… [+704 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "The app allowing fans to invest in their favourite musicians",
      "description": "Swedish company Corite is setting itself up as an alternative to record labels.",
      "url": "https://www.bbc.co.uk/news/business-64486877",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A7DA/production/_128507924_gettyimages-602228904.jpg",
      "publishedAt": "2023-02-06T00:33:03Z",
      "content": "You might not have heard of an electronic music artist called Alan Walker, but he has a significant fanbase.\r\nOn YouTube the video of one of his songs, Faded, has been played 3.5 billon times, and he… [+6232 chars]"
    },
    {
      "source": { "id": null, "name": "GSMArena.com" },
      "author": "Yordan",
      "title": "Huawei Watch D review",
      "description": "Introduction\n\nHuawei introduced the Watch D wearable with blood pressure tracking back in late 2021, but it took until late 2022 to get the required certifications and make it available in Western markets. And now that we got to spend a few weeks with it here…",
      "url": "https://www.gsmarena.com/huawei_watch_d_review-news-57359.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/01/huawei-watch-d-review/-952x498w6/gsmarena_001.jpg",
      "publishedAt": "2023-02-06T03:04:01Z",
      "content": "Introduction\r\nHuawei introduced the Watch D wearable with blood pressure tracking back in late 2021, but it took until late 2022 to get the required certifications and make it available in Western ma… [+6538 chars]"
    },
    {
      "source": { "id": null, "name": "The Intercept" },
      "author": "Ryan Grim",
      "title": "How a Grassroots Revolt in the Iconic Retirement Community Ended With a 72-Year-Old Political Prisoner",
      "description": "A slate of reformers unleashed the fury of the Florida GOP and its business elite, and left two men facing garbage felony charges.\nThe post How a Grassroots Revolt in the Iconic Retirement Community Ended With a 72-Year-Old Political Prisoner appeared first o…",
      "url": "https://theintercept.com/2023/02/05/ron-desantis-florida-villages-oren-miller/",
      "urlToImage": "https://theintercept.imgix.net/wp-uploads/sites/1/2023/01/DSC0381-e1675443977980.jpg?auto=compress%2Cformat&q=90&fit=crop&w=1200&h=800",
      "publishedAt": "2023-02-06T01:37:43Z",
      "content": "The trouble began\r\n in 2019 when residents of The Villages were suddenly hit with a 25 percent hike in their property taxes. Historically, nobody under 55 has been allowed to move to The Villages, a … [+43708 chars]"
    },
    {
      "source": { "id": null, "name": "DIE WELT" },
      "author": "Michael Höfling",
      "title": "Immer mehr Schulden? Das fatale „Anything-Goes“-Signal an die Südländer",
      "description": "Viele Länder haben ihre Sozialausgaben während Corona hochgefahren. Gerade die hoch verschuldeten EU-Länder haben sie danach kaum wieder gesenkt. Ihnen wird signalisiert, keine solide Haushaltspolitik mehr betreiben zu müssen. Das Geld fehlt dort, wo es für E…",
      "url": "https://www.welt.de/wirtschaft/article243612351/Sozialausgaben-Das-fatale-Anything-Goes-Signal-an-die-Suedlaender.html",
      "urlToImage": "https://img.welt.de/img/wirtschaft/mobile243613109/9251350297-ci16x9-w1200/kombo-hoefling-schulden.jpg",
      "publishedAt": "2023-02-06T05:04:40Z",
      "content": "Es sind beunruhigende Zahlen, die die OECD in ihrer Studie zur Quote der Sozialleistungen in den verschiedenen Ländern ermittelt hat. Zwar haben viele Regierungen ihre entsprechenden Budgets nach der… [+2427 chars]"
    },
    {
      "source": { "id": null, "name": "DIE WELT" },
      "author": "Dorothea Siems",
      "title": "Südeuropas üppige Sozialetats beleben die europäische Schuldendebatte neu",
      "description": "In der Coronakrise wurden europaweit Hilfspakete für die Bevölkerung aufgelegt. Viele Länder führen ihre Ausgaben wieder zurück, aber Italien, Spanien und Frankreich belassen ihre Sozialbudgets auf hohem Niveau. Kein Wunder, dass sie auf lockerere Schuldenreg…",
      "url": "https://www.welt.de/wirtschaft/article243608869/Sozialausgaben-Europas-Suedlaender-bleiben-auch-nach-der-Pandemie-spendabel.html",
      "urlToImage": "https://img.welt.de/img/wirtschaft/mobile243612187/4561356697-ci16x9-w1200/Sun-shining-through-the-arches-of-Coliseum-at-sunrise-Rome-Italy.jpg",
      "publishedAt": "2023-02-06T05:03:29Z",
      "content": "In der Corona-Pandemie haben die Regierungen weltweit die Sozialausgaben kräftig in die Höhe geschraubt. Vor allem die Aufwendungen im Gesundheitswesen sowie Zahlungen für Arbeitslose und Kurzarbeit … [+7224 chars]"
    },
    {
      "source": { "id": null, "name": "Markezine.jp" },
      "author": null,
      "title": "獲得キーワードが5倍！マンガアプリ「comico」に聞く、攻めと守りのアプリマーケティング",
      "description": "星の数ほどあるモバイルアプリ。アプリストアの中でいかに獲得単価をおさえてダウンロードして使ってもらうかは各社の課題だ。マンガアプリ「comico」を展開するNHN comicoは、アドウェイズの提案により、App StoreのApple Search Adsについて運用へと舵を切った。その中で、全自動マーケティングプラットフォームUNICORNを採用。開始3ヵ月で潜在キーワードを5倍にすることに成功し、成果にもつながっているという。本記事では、NHN comicoの浜野美穂子氏、アドウェイズの日髙智也氏、UNIC…",
      "url": "https://markezine.jp/article/detail/40765",
      "urlToImage": "https://markezine.jp/static/images/article/40765/40765_fb.jpg",
      "publishedAt": "2023-02-06T02:00:00Z",
      "content": "comicoNHN comicoApp StoreApple Search AdsUNICORN35NHN comicoUNICORN3comicoApple Search Adscomico\r\ncomicoNHN comico\r\nUNICORNUNICORNApple Search AdsApple Search AdsNHN comico\r\ncomico\r\ncomico600iOSAndro… [+105 chars]"
    },
    {
      "source": { "id": null, "name": "Karapaia.com" },
      "author": "parumo_zaeega",
      "title": "犬がお店でいつも同じおもちゃを選ぶ理由にじんわりほっこり",
      "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
      "url": "https://karapaia.com/archives/52319939.html",
      "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/a/1/a155ddb2.jpg",
      "publishedAt": "2023-02-06T03:00:45Z",
      "content": ""
    },
    {
      "source": { "id": null, "name": "Inside.com.tw" },
      "author": "Anny",
      "title": "和 Mac Pro 打架？Mark Gurman：下一代 搭載 M2 Ultra Mac Studio 可能不會推出",
      "description": "Mark Gurman 解釋，由於即將推出的 Apple Silicon Mac Pro 在功能上與 Mac Studio 非常相似，蘋果可能會等到 M3 或 M4 系列晶片發表時再才會推出新設備，或者根本不會更新。",
      "url": "https://www.inside.com.tw/article/30632-M2-Ultra-mac-studio-may-not-launch",
      "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/02/5f7745b9-453c-4bb0-af2e-800f18874194.jpg?auto=compress&fit=crop&h=630&w=1200",
      "publishedAt": "2023-02-06T03:04:00Z",
      "content": "Mac Studio Mark Gurman Power On M2 Ultra Mac Studio \r\nMark Gurman Apple Silicon Mac Pro Mac Studio M3 M4 \r\n Mac Pro Mac Studio M2 Ultra M1 Ultra M2 Ultra Mac Studio M2 Ultra Mac Pro Mac Studio M3 M4 … [+225 chars]"
    },
    {
      "source": { "id": null, "name": "Businessinsider.de" },
      "author": "Barbara Barkhausen",
      "title": "Nach Microsoft investiert auch Google mehrere hundert Millionen Dollar in ein KI-Startup",
      "description": "Die Google-Beteiligung an der Firma Anthropic ähnelt Microsofts Investment in ChatGPT-Macher OpenAI. Außerdem: Elon Musk triumphiert vor Gericht.",
      "url": "https://www.businessinsider.de/gruenderszene/business/google-investition-ki-startup/",
      "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2023/02/GettyImages-1246739608.jpg?ver=1675504080",
      "publishedAt": "2023-02-06T04:55:00Z",
      "content": "Die Google-Beteiligung an der Firma Anthropic ähnelt Microsofts Investment in ChatGPT-Macher OpenAI. Außerdem: Elon Musk triumphiert vor Gericht und Twitter macht neue Pläne.\r\nGuten Morgen! Auch währ… [+4902 chars]"
    },
    {
      "source": { "id": null, "name": "Forbes" },
      "author": "John Archer, Senior Contributor, \n John Archer, Senior Contributor\n https://www.forbes.com/sites/johnarcher/",
      "title": "Sony Launches Its First PS5 And Xbox Series X-Friendly AV Receivers",
      "description": "Hopefully their relatively late arrival will mean they’re bug free",
      "url": "https://www.forbes.com/sites/johnarcher/2023/02/05/sony-launches-its-first-ps5-and-xbox-series-x-friendly-av-receivers/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63e045250e0536bad0166590/0x0.jpg?format=jpg&width=1200",
      "publishedAt": "2023-02-06T00:16:04Z",
      "content": "It might have taken much longer than most of its rivals, but Sony has finally got round to launching a range of AV receivers capable of handling all of the latest gaming capabilities weve long had ac… [+6090 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Grammy 2023: estos son los ganadores de los premios de la música de EE.UU.",
      "description": "Beyoncé lidera las nominaciones, con nueve en total, seguida de Kendrick Lamar con ocho y Adele y Brandi Carlile, con siete cada una.",
      "url": "https://www.bbc.com/mundo/noticias-64532901",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_mundo/AAC1/production/_128531734_gettyimages-1463261049.jpg",
      "publishedAt": "2023-02-06T01:13:17Z",
      "content": "Fuente de la imagen, Getty Images\r\nPie de foto, La gala arrancó con la actuación de Bad Bunny.\r\n¿Hará historia Bad Bunny, llevándose a casa el Grammy al mejor álbum? Su disco \"Un verano sin ti\" es el… [+7539 chars]"
    },
    {
      "source": { "id": null, "name": "Cool3c.com" },
      "author": "Chevelle.fu",
      "title": "彭博社指稱蘋果有意在 2024 年推出定位在 iPhone 16 Pro Max 之上的 iPhone 16 Ultra",
      "description": "蘋果在 2022 年的 Apple Watch 產品線添加了頂級產品 Apple Watch Ultra ，現在也傳出蘋果有意在在 iPhone 也導入「 Ultra 」級距產品；彭博社的 Mark Gurman 曾在 2022 年 9 月指稱蘋果有意在 2023 年以「 iPhone 15 Ultra 」的名稱取代既有的「 iPhone 15 Pro Max 」，但在最新的調查報告則改稱蘋果要至 2024 年才會在 iPhone 16 系列使用 iPhone 16 Ultra 的產品名稱，並作為 iPhone …",
      "url": "https://www.cool3c.com/article/189038",
      "urlToImage": "https://sw.cool3c.com/user/29442/2023/cff70f3d-4cb5-4279-8f92-2b8b48e6a093.jpg?fit=max&w=1400&q=80",
      "publishedAt": "2023-02-06T02:20:03Z",
      "content": "2022 Apple Watch Apple Watch Ultra iPhone Ultra Mark Gurman 2022 9 2023 iPhone 15 Ultra iPhone 15 Pro Max 2024 iPhone 16  iPhone 16 Ultra iPhone 16  iPhone 16 Pro Max \r\n Mark Gurman Pro Max iPhone 16… [+151 chars]"
    },
    {
      "source": { "id": null, "name": "Biztoc.com" },
      "author": "cnbc.com",
      "title": "January's U.S. jobs reports was stunningly good",
      "description": "This report is from today's CNBC Daily Open, our new, international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what you see? You can subscribe here . In ordinary economic ti…",
      "url": "https://biztoc.com/x/0e5fa3b5061fd046",
      "urlToImage": "https://c.biztoc.com/p/0e5fa3b5061fd046/og.webp",
      "publishedAt": "2023-02-06T00:28:04Z",
      "content": "This report is from today's CNBC Daily Open, our new, international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like wh… [+285 chars]"
    },
    {
      "source": { "id": null, "name": "3dnews.ru" },
      "author": null,
      "title": "Снятие санитарных ограничений позволило Foxconn увеличить январскую выручку на 48,2 %",
      "description": "О степени влияния проблем с производством iPhone на предприятии Foxconn в Чжэнчжоу в прошлом квартале на бизнес Apple можно было судить по квартальному отчёту последней из компаний. Реализация смартфонов принесла на 8 % меньше средств, чем год назад, но руков…",
      "url": "https://3dnews.ru/1081439/snyatie-sanitarnih-ogranicheniy-pozvolilo-foxconn-uvelichit-yanvarskuyu-viruchku-na-482-",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/02/06/1081439/iphone_01.jpg",
      "publishedAt": "2023-02-06T03:51:00Z",
      "content": "iPhone Foxconn Apple . 8 % , , Apple , iPhone, . Foxconn 48,2 %.\r\n: Apple\r\nFoxconn, Reuters, , 48,2 % , , , Foxconn. $22 , , .\r\n Foxconn 4,93 %, . Foxconn 70 % Apple, iPhone 14 Pro . , Foxconn 4 % . … [+17 chars]"
    },
    {
      "source": { "id": null, "name": "3dnews.ru" },
      "author": null,
      "title": "Новейшие iPhone начали продавать в Китае с редкой скидкой более $100 в связи с падением спроса",
      "description": "Новейшие смартфоны компании Apple продают в Китае с необычно большими скидками, эквивалентным более $100. Как сообщает Bloomberg, такие чрезвычайные меры всего через несколько месяцев после релиза новинок компании приходится принимать в связи с буквальным ист…",
      "url": "https://3dnews.ru/1081440/publikatsiya-1081440",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/02/06/1081440/sm.phot57ffe74a78c.800.jpg",
      "publishedAt": "2023-02-06T04:23:00Z",
      "content": "Apple , $100. Bloomberg, iPhone .\r\n: Victor Serban/unsplash.com\r\n, iPhone Pro 800 ($118) 11 JD.com China Mobile, , , . , 700 China Securities Journal . , Apple .\r\n, — . , , Apple . , 79 % iPhone. Jef… [+199 chars]"
    },
    {
      "source": { "id": null, "name": "Everything-everywhere.com" },
      "author": "Gary Arndt",
      "title": "Questions & Answers: Volume 4",
      "description": "Podcast Transcript Every February, podcasters will come out of their hole in the ground. If they find listener questions, it means there will be six more weeks of winter.  As I peeked my head out of the ground this month, I found a plethora of questions, whic…",
      "url": "https://everything-everywhere.com/questions-answers-volume-4/",
      "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-xP7qTjR/0/e44494c9/L/Questions%20Answers-%20Volume%204-L.png",
      "publishedAt": "2023-02-06T02:06:33Z",
      "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Stitcher | Podcast Republic | RSS | Patreon | Podvine | Goodpods\r\nEvery February, podcasters will come out of their hole in t… [+12633 chars]"
    },
    {
      "source": { "id": null, "name": "Tinhte.vn" },
      "author": "vn_ninja@yahoo.com (vn_ninja), vn_ninja",
      "title": "Google đang phát triển một trình duyệt mới cho iOS không tuân theo quy tắc của Apple?",
      "description": "Báo cáo từ tờ The Register cho biết các nhà phát triển Chromium của Google đang trong quá trình phát triển một trình duyệt thử nghiệm trên iOS mà sẽ không dùng engine WebKit của Apple.\n \nCác quy tắc App Store hiện tại quy định rằng các app trình…",
      "url": "https://tinhte.vn/thread/google-dang-phat-trien-mot-trinh-duyet-moi-cho-ios-khong-tuan-theo-quy-tac-cua-apple.3630635/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/02/6319527_cover_WebKit_Chromium_tinhte.jpg",
      "publishedAt": "2023-02-06T01:21:37Z",
      "content": "Báo cáo t t The Register cho bit các nhà phát trin Chromium ca Google ang trong quá trình phát trin mt trình duyt th nghim trên iOS mà s không dùng engine WebKit ca Apple.Các quy tc App Store hin ti … [+1525 chars]"
    },
    {
      "source": { "id": null, "name": "Tinhte.vn" },
      "author": "tieumitinhte@gmail.com (MinhTriND), MinhTriND",
      "title": "Gurman: Apple sẽ phát triển iPhone dòng Ultra, cao cấp hơn Pro Max, ra mắt vào năm 2024",
      "description": "Apple có thể sẽ bổ sung thêm 1 dòng iPhone cao cấp hơn cả dòng Pro và Pro Max như mọi năm, và điều đó có thể được áp dụng từ thế hệ iPhone ra mắt trong năm 2024 (iPhone 16), theo nguồn tin từ Mark Gurman của tờ Bloomberg.",
      "url": "https://tinhte.vn/thread/gurman-apple-se-phat-trien-iphone-dong-ultra-cao-cap-hon-pro-max-ra-mat-vao-nam-2024.3630695/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/02/6319720_cover-ip15.jpg",
      "publishedAt": "2023-02-06T01:16:06Z",
      "content": "Apple có th s b sung thêm 1 dòng iPhone cao cp hn c dòng Pro và Pro Max nh mi nm, và iu ó có th c áp dng t th h iPhone ra mt trong nm 2024 (iPhone 16), theo ngun tin t Mark Gurman ca t Bloomberg. Trc… [+1218 chars]"
    },
    {
      "source": { "id": null, "name": "Azofreeware.com" },
      "author": "阿榮™",
      "title": "WALTR PRO 4.0.6 - 取代iTunes的蘋果手機影音匯入軟體",
      "description": "取代iTunes的蘋果手機影音匯入軟體 - WALTR PRO，如何將MP3、FLAC、AVI、MKV檔轉存到蘋果手機？利用這個軟體就可以，將任何檔案快速的傳送和轉換成適用於iPhone與iPad的格式，讓你不需要再煩惱相容性的問題，只要拖放檔案即能取得高品質且Apple環境友好的檔案格式，可將檔案轉換至已連結的Apple設備，還可以指定轉換到特定的幾個應用程式。（阿榮福利味）\n\n下載連結→ https://www.azofreeware.com/p/waltr-pro.html\n\n官方網站：Softorino\n…",
      "url": "https://www.azofreeware.com/2023/02/waltr-pro.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAApjfqEt4ykYVqOC9bvuoUVs7IoKZicm5pVqKQrj5e-bGvAqdzkxbDFmiEeEaByS9hgCrr_mTgUf69NSZbvoiAIbGGgG9h2x-wufyWOyEBMxp3ZJBous7niO8aEMyLUEg5KaXLZZ_-M9LE1W-A-iBT-4wXlyvz2I7OgAa1fZ0r17jAtec7Xo/w1200-h630-p-k-no-nu/WALTR_PRO_20230206_01.png",
      "publishedAt": "2023-02-06T02:36:00Z",
      "content": "iTunes - WALTR PRO，MP3、FLAC、AVI、MKV？，iPhoneiPad，，Apple，Apple，。（）→ https://www.azofreeware.com/p/waltr-pro.html\r\n：Softorino：：：Windows、macOS：waltrpro\r\nTransfer Virtually Any File to iOS. With WALTR PRO… [+499 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Beast" },
      "author": "Emily Shugerman",
      "title": "Shady Gold Guru Burnished Image With Paid-For Media Titles",
      "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Getty/Facebook\r\nInvestors who claim they were swindled by an entrepreneur selling precious metals as an investment vehicle told The Daily Beast they trusted him in part because of his ties to two major med…",
      "url": "https://www.thedailybeast.com/shady-gold-guru-burnished-image-with-paid-for-rolling-stone-and-forbes-titles",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1675643917/230205-tyler-gallagher-tease_tcqb9n",
      "publishedAt": "2023-02-06T01:02:51Z",
      "content": "Investors who claim they were swindled by an entrepreneur selling precious metals as an investment vehicle told The Daily Beast they trusted him in part because of his ties to two major media compani… [+10387 chars]"
    },
    {
      "source": { "id": null, "name": "CoinDesk" },
      "author": "Sam Reynolds",
      "title": "First Mover Asia: Bitcoin Not Ready to Soar as Investors Await Fed Chair Speech, More Earnings",
      "description": "ALSO: As crypto prices rise, venture capital into the blockchain space is likely to rise. But will venture firms learn from their past overindulgences in the sector? Bitcoin dips below $23K in early weekend trading before recovering slightly.",
      "url": "https://www.coindesk.com/markets/2023/02/06/first-mover-asia-bitcoin-not-ready-to-soar-as-investors-await-fed-chair-speech-more-earnings/",
      "urlToImage": "https://www.coindesk.com/resizer/yfg_e3PmucI-fXFyc3nHvEpbM_s=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ONT7KNUD6ZFNLOYP72E2ZXAMCY.jpg",
      "publishedAt": "2023-02-06T01:02:36Z",
      "content": "Good morning. Heres whats happening:\r\nPrices: Bitcoin dipped below $23K earlier in the weekend and flattened on Sunday as investors await the next utterances from Federal Reserve Chair Jerome Powell.… [+9486 chars]"
    },
    {
      "source": { "id": null, "name": "Sspai.com" },
      "author": "少数派编辑部",
      "title": "派早报：网购应用信息收集报告发布；陪审团驳回对马斯克证券欺诈诉讼",
      "description": "你可能错过的新鲜事网购应用个人信息收集情况报告发布2月2日，国家互联网信息办公室转发了中国网络空间安全协会、国家计算机网络应急技术处理协调中心发布的《「网上购物类」App个人信息收集情况测试报告》。报 ...查看全文",
      "url": "https://sspai.com/post/78129",
      "urlToImage": "https://cdn.sspai.com/2/5/2023/article/e4ebaab9-734c-ac72-a4b0-a32544850210.png",
      "publishedAt": "2023-02-06T00:55:31Z",
      "content": "2 2 App 19 10 \r\n<ul><li> app 4 357 3 152 3 255 4 1199 </li><li> app 4 4 </li><li>653KB115KB 12 92KB1.4KB</li></ul>\r\n2 4 2018 8 7 420 \r\n 2018 2000 2022 4 falserecklessly SpaceX material\r\n ChatGPT \r\n2 … [+615 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": "Charlotte Wilder",
      "title": "Super Bowl of mirrors shows us how NFL has and hasn’t changed",
      "description": "From the Kelce brothers to Mahomes vs. Hurts to Reid vs. Sirianni, Chiefs-Eagles is a Super Bowl matchup full of mirrors, Charlotte Wilder writes.",
      "url": "https://www.foxsports.com/stories/nfl/super-bowl-of-mirrors-tells-us-how-nfl-has-and-hasnt-changed",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/02/1408/814/Reid-Sirianni2.jpg?ve=1&tl=1",
      "publishedAt": "2023-02-06T00:26:27Z",
      "content": "As Kansas City beat Cincinnati on Championship Sunday, the Super Bowl storylines were drawn into a house of mirrors. Wander into it and youll find all sorts of parallels.\r\nI am by no means the first … [+7402 chars]"
    },
    {
      "source": { "id": null, "name": "Livedoor.jp" },
      "author": "itsoku",
      "title": "【悲報】外国人「日本はiPhone中心すぎて頭がおかしい」",
      "description": "1:それでも動く名無し  2023/02/06(月) 09:35:30.42 ID:MX7pMuFJM     https://twitter.com/bencsin/status/1622051985745940480",
      "url": "http://blog.livedoor.jp/itsoku/archives/60176409.html",
      "urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/1/9/19a3a847-s.jpg",
      "publishedAt": "2023-02-06T04:10:54Z",
      "content": "1: 2023/02/06() 09:35:30.42 ID:MX7pMuFJM\r\nhttps://twitter.com/bencsin/status/1622051985745940480\r\n8: 2023/02/06() 09:38:35.35 ID:MX7pMuFJM\r\n iPhoneiPhone \r\n52: 2023/02/06() 09:51:52.96 ID:8tTYpl3HM\r\n… [+2644 chars]"
    },
    {
      "source": { "id": null, "name": "WinFuture" },
      "author": null,
      "title": "Notebooksbilliger: Jede Woche reihenweise neue Sonderangebote 06. Februar",
      "description": "Notebooksbilliger.de bietet diese Woche wieder viele Produkte zum stark reduzierten Preis. Solange der Vorrat reicht, gibt es allerhand Schnäppchen abzustauben, die, verglichen zum Straßenpreis, noch mal ordentlich reduziert wurden.(Weiter lesen)",
      "url": "https://winfuture.de/special/notebooksbilliger/angebote#1675660083",
      "urlToImage": "https://i.wfcdn.de/teaser/1920/38209.jpg",
      "publishedAt": "2023-02-06T05:08:03Z",
      "content": "<table><tr><th>Rubrik</th><th>Titel</th><th>Preis</th><th>Preisvergleich</th><th>Preis</th><th>Top</th></tr>\r\n<tr><td>Notebooks</td><td>Acer Aspire 5 (17.3-Zoll, Intel i7-1165G7, 16 GB RAM, 1 TB SSD)… [+6897 chars]"
    },
    {
      "source": { "id": null, "name": "Screen Rant" },
      "author": "Kishalaya Kundu",
      "title": "Does The Galaxy S23 Have A Headphone Jack? Read This Before You Buy",
      "description": "Samsung's Galaxy S23-series comes with almost all the features one can ask for in a smartphone, but do they also come with a 3.5mm headphone jack?",
      "url": "https://screenrant.com/galaxy-s23-headphone-jack/",
      "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/samsung-galaxy-s23-with-headphone-jack.jpg",
      "publishedAt": "2023-02-06T01:00:14Z",
      "content": "Samsung's all-new Galaxy S23 lineup offers a number of features that are unavailable on other smartphones, but is the 3.5mm headphone jack one of them? The headphone socket used to be a standard feat… [+2753 chars]"
    },
    {
      "source": { "id": null, "name": "Techreport.com" },
      "author": "Will Macmaster",
      "title": "MEMAG Hits $3 Million Milestone as Presale Pumps – Buy Now Before End of Phase 5",
      "description": "There seems to be no limit to how high Meta Masters Guild (MEMAG) can climb – and how fast it’s going to do so. It hasn’t taken MEMAG very long...\nThe post MEMAG Hits $3 Million Milestone as Presale Pumps – Buy Now Before End of Phase 5 appeared first on The …",
      "url": "https://techreport.com/cryptocurrency/3491230/memag-hits-3-million-milestone-as-presale-pumps-buy-now-before-end-of-phase-5/",
      "urlToImage": "https://techreport.com/wp-content/uploads/2023/02/meta-master-guild.jpg",
      "publishedAt": "2023-02-06T02:14:13Z",
      "content": "There seems to be no limit to how high Meta Masters Guild (MEMAG)can climb and how fast its going to do so. It hasnt taken MEMAG very long at all to simply blow through four presale stages. Its now r… [+5565 chars]"
    },
    {
      "source": { "id": null, "name": "Bringatrailer.com" },
      "author": "bringatrailer",
      "title": "BaT Auction: 2019 Nissan GT-R Premium",
      "description": "This 2019 Nissan GT-R Premium is finished in Super Silver over Kuro Night leather and is powered by a twin-turbocharged 3.8-liter V6 mated to a six-speed dual-clutch transmission and an ATTESA E-TS all-wheel-drive system. Additional equipment includes the Pre…",
      "url": "https://bringatrailer.com/listing/2019-nissan-gt-r-premium-2/",
      "urlToImage": "https://bringatrailer.com/wp-content/uploads/2023/01/2019_nissan_gt-r-premium_dsc3927-99743.jpg",
      "publishedAt": "2023-02-06T00:10:03Z",
      "content": "This 2019 Nissan GT-R Premium is finished in Super Silver over Kuro Night leather and is powered by a twin-turbocharged 3.8-liter V6 mated to a six-speed dual-clutch transmission and an ATTESA E-TS a… [+2519 chars]"
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Bruce Golding",
      "title": "Not just balloons: Here’s how China spies on the US",
      "description": "There have been scores of recent incidents in which Beijing has used a wide variety of methods to obtain intelligence, as well as military and commercial technology, from the US.",
      "url": "https://nypost.com/2023/02/05/not-just-balloons-heres-how-china-spies-on-the-us/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/02/newspress-collage-25640481-1675643307964.jpg?quality=75&strip=all&1675625356&w=1024",
      "publishedAt": "2023-02-06T00:37:34Z",
      "content": "The surveillance balloon that floated across the US before being shot down by an Air Force F-22 fighter allegedly marked the latest — and most brazen — effort by China to spy on the US.\r\nThere have b… [+8804 chars]"
    },
    {
      "source": { "id": null, "name": "DIE WELT" },
      "author": "Anja Ettel, Holger Zschäpitz",
      "title": "Warnung vor der Gier-Raylle und fette Gewinne mit Schlankmachern",
      "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Holger Zschäpitz über neue Spannungen zwischen den Supermächten, Deutsche Post im Streik-Stress und verraten, welcher der beiden Hosts den Börsengang von Ionos gezeichnet …",
      "url": "https://www.welt.de/podcasts/alles-auf-aktien/article243617581/Boersen-Podcast-Warnung-vor-der-Gier-Raylle-und-fette-Gewinne-mit-Schlankmachern.html",
      "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293627/5361351857-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Zschaepitz-Ettel.jpg",
      "publishedAt": "2023-02-06T04:05:44Z",
      "content": "Außerdem geht es um Porsche, Tesla, Leoni, Alphabet, Wal Disney, Carvana, AMC PRF, Coinbase, Peloton, Microstrategy, Virgin Galctic, Upstart, Beyond Meat, Palantir, GameSTop, Bad Bad &amp; Beyond, Ro… [+330 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Reuters",
      "title": "Retailers offering discounts on high-end iPhones in China",
      "description": "Third party retailers in China are offering discounts of as much as 10% on Apple Inc's iPhone 14 Pro amid sluggish demand for smartphones.  Electronics...",
      "url": "https://finance.yahoo.com/news/retailers-offering-discounts-high-end-032358063.html",
      "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/f38e8169ee44896d3f01bea83034a779",
      "publishedAt": "2023-02-06T03:23:58Z",
      "content": "SHANGHAI (Reuters) - Third party retailers in China are offering discounts of as much as 10% on Apple Inc's iPhone 14 Pro amid sluggish demand for smartphones.\r\nElectronics vendors JD.Com Inc and Sun… [+1322 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Bloomberg News",
      "title": "Apple’s Latest iPhones Sell at Rare $100-Plus Discounts in China",
      "description": "(Bloomberg) -- Apple Inc.’s latest iPhones are selling at discounts of more than $100 in China, an unusually steep price cut just months after launch that...",
      "url": "https://finance.yahoo.com/news/apple-latest-iphones-sell-rare-014100979.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/235jLmpSL9lD24moY4Rvmg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Mzc-/https://media.zenfs.com/en/bloomberg_technology_68/98b9491919e334a672cc23d4e02a2552",
      "publishedAt": "2023-02-06T01:41:00Z",
      "content": "(Bloomberg) -- Apple Inc.s latest iPhones are selling at discounts of more than $100 in China, an unusually steep price cut just months after launch that suggests dwindling demand for even its highes… [+2360 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "AFP",
      "title": "Most Asian markets drop as US jobs fan rate worries",
      "description": "Asian markets mostly fell Monday and the dollar extended gains after a forecast-busting US jobs report fanned expectations of more Federal Reserve interest...",
      "url": "https://news.yahoo.com/most-asian-markets-drop-us-032332312.html",
      "urlToImage": "https://media.zenfs.com/en/afp.com/056a76bf52bfb1a0d73889920711eccb",
      "publishedAt": "2023-02-06T03:23:32Z",
      "content": "Asian markets mostly fell Monday and the dollar extended gains after a forecast-busting US jobs report fanned expectations of more Federal Reserve interest rate hikes.\r\nAdding to the downbeat mood we… [+3722 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "PR Newswire",
      "title": "EquitiesFirst Celebrates 20 Years of Pioneering Progressive Capital",
      "description": "EquitiesFirst, the global asset-backed financing company, today celebrated its 20th anniversary as a pioneer of progressive capital. Founded in 2002 by Mr Al...",
      "url": "https://finance.yahoo.com/news/equitiesfirst-celebrates-20-years-pioneering-030000369.html",
      "urlToImage": "https://media.zenfs.com/en/prnewswire.com/04135d84344ba3a9099c81686ddc3acd",
      "publishedAt": "2023-02-06T03:00:00Z",
      "content": "HONG KONG, Feb. 6, 2023 /PRNewswire/ -- EquitiesFirst, the global asset-backed financing company, today celebrated its 20th anniversary as a pioneer of progressive capital. Founded in 2002 by Mr Al C… [+6439 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "PR Newswire",
      "title": "EquitiesFirst Celebrates 20 Years of Pioneering Progressive Capital",
      "description": "EquitiesFirst, the global asset-backed financing company, today celebrated its 20th anniversary as a pioneer of progressive capital. Founded in 2002 by Mr Al...",
      "url": "https://finance.yahoo.com/news/equitiesfirst-celebrates-20-years-pioneering-040000237.html",
      "urlToImage": "https://media.zenfs.com/en/prnewswire.com/ec9a7f3e0aaba98673e2f18601fc8150",
      "publishedAt": "2023-02-06T04:00:00Z",
      "content": "HONG KONG, Feb. 6, 2023 /PRNewswire/ -- EquitiesFirst, the global asset-backed financing company, today celebrated its 20th anniversary as a pioneer of progressive capital. Founded in 2002 by Mr Al C… [+6305 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Sam Reynolds",
      "title": "First Mover Asia: Bitcoin Not Ready to Soar as Investors Await Fed Chair Speech, More Earnings",
      "description": "ALSO: As crypto prices rise, venture capital into the blockchain space is likely to rise. But will venture firms learn from their past overindulgences in the...",
      "url": "https://finance.yahoo.com/news/first-mover-asia-bitcoin-not-010236742.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ghka1M3nZK5q5RPLPYQyMA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/coindesk_75/ee6838a2c7af41f486c00a6378a82cfe",
      "publishedAt": "2023-02-06T01:02:36Z",
      "content": "Join the most important conversation in crypto and web3! Secure your seat today\r\nGood morning. Heres whats happening:\r\nPrices: Bitcoin dipped below $23K earlier in the weekend and flattened on Sunday… [+9712 chars]"
    },
    {
      "source": { "id": null, "name": "Livedoor.jp" },
      "author": "golden3",
      "title": "携帯はiPhone、靴はNIKEのダンク、財布はヴィトン、ダウンはノースフェイスなんやが",
      "description": "1 ：それでも動く名無し ：2023/01/26(木) 16:59:18.45 ID:YoMkhY9Gr.net\n\n\n どんなイメージ？ \n\n\n\n18 ：それでも動く名無し ：2023/01/26(木) 17:03:01.85 ID:aZ0Wjcki0.net\n\n\n モブキャラ \n\n\n\n15 ：それでも動く名無し ：2023/01/26(木) 17:02:41.63 ID:ozP8W6Z90.net\n...",
      "url": "http://blog.livedoor.jp/goldennews/archives/52211822.html",
      "urlToImage": "https://livedoor.blogimg.jp/goldennews/imgs/8/d/8dad758a-s.jpg",
      "publishedAt": "2023-02-06T00:18:00Z",
      "content": "1 2023/01/26() 16:59:18.45 ID:YoMkhY9Gr.net\r\n18 2023/01/26() 17:03:01.85 ID:aZ0Wjcki0.net\r\n15 2023/01/26() 17:02:41.63 ID:ozP8W6Z90.net\r\n2 2023/01/26() 16:59:59.62 ID:dRnSby3m0.net\r\n9 2023/01/26() 17… [+5918 chars]"
    },
    {
      "source": { "id": null, "name": "Technews.tw" },
      "author": "MoneyDJ",
      "title": "需求疲軟？蘋果中國第三方經銷商 9 折促銷 iPhone 14 Pro",
      "description": "最新消息顯示，蘋果（Apple Inc.）位於中國的第三方經銷商正在對最新款 iPhone 14 Pro 祭出最多 10% 折扣，暗示智慧手機需求表現並不佳。 路透社6日報導，京東（JD.Com）、蘇寧易購（Suning）這兩家電子產品經銷網站顯示，iPhone 14 Pro入門款售價只要7,199...",
      "url": "https://technews.tw/2023/02/06/retailers-offering-discounts-on-high-end-iphones-in-china/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2022/09/16160023/41.jpg",
      "publishedAt": "2023-02-06T05:20:41Z",
      "content": "Apple Inc. iPhone 14 Pro 10% \r\n6JD.ComSuningiPhone 14 Pro7,1991,062800\r\niPhone 14 ProPro Max\r\nJeffriesEdison LeeiPhone 14\r\nCanalys20222.861014%24%iPhone 14Foxconn\r\nMoneyDJ"
    },
    {
      "source": { "id": null, "name": "Technews.tw" },
      "author": "MoneyDJ",
      "title": "就業超強引發升息疑慮，那指挫、靜待鮑爾",
      "description": "受到非農就業人數遠超預期、引發聯準會（Fed）恐將積極升息的疑慮衝擊，美國四大指數 3 日全面下挫，由重量級高科技股領軍走軟。 道瓊工業平均指數2月3日終場下跌0.38%（127.93點）、收33,926.01點；週K線下跌0.15%。那斯達克指數下跌1.59%（193.86點）、收12,006.9...",
      "url": "https://finance.technews.tw/2023/02/06/us-stock-0203/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2021/09/08150803/business-5475660_1920.jpg",
      "publishedAt": "2023-02-06T00:40:09Z",
      "content": "Fed 3 \r\n230.38%127.9333,926.01K0.15%1.59%193.8612,006.96K3.31%55001.04%43.284,136.48K1.62%541.9%59.733,082.11K4.65%54\r\n31517,00020227260,0003.5%3.4%196951187,0003.6%\r\n10.3%4.4%0.14.6%labor forceparti… [+347 chars]"
    },
    {
      "source": { "id": null, "name": "Gizmodo Australia" },
      "author": "Asha Barbaschow",
      "title": "The Easy Way to Set up a New MacBook Using Migration Assistant",
      "description": "Looking to copy content from an old MacBook to a new one? \nThe post The Easy Way to Set up a New MacBook Using Migration Assistant appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>The Easy Way to Set up a New MacBook Using Migration Assistant -…",
      "url": "https://www.gizmodo.com.au/2023/02/macbook-migration-assistant-copy-old-to-new/",
      "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/02/06/gizmodo-9-1.png?quality=80&resize=1280,720",
      "publishedAt": "2023-02-06T03:57:11Z",
      "content": "I’m currently reviewing the new M2 MacBook Pro, and as I use the previous Pro (the 2021 14-inch model featuring the M1 Max chip) every day for work, I didn’t want to start right back at the beginning… [+4244 chars]"
    },
    {
      "source": { "id": null, "name": "Moneycontrol" },
      "author": "Bloomberg",
      "title": "Appleâs latest iPhones sell at rare $100-plus discounts in China",
      "description": "JD.com Inc. and state carrier China Mobile Ltd. are among the retailers taking 800 yuan ($118) off the iPhone 14 Pro range over 11 days.",
      "url": "https://www.moneycontrol.com/news/world/apples-latest-iphones-sell-at-rare-100-plus-discounts-in-china-10012311.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/02/395510584-770x433.jpg",
      "publishedAt": "2023-02-06T02:00:41Z",
      "content": "Apple Inc.s latest iPhones are selling at discounts of more than $100 in China, an unusually steep price cut just months after launch that suggests dwindling demand for even its highest-end devices.\r… [+2184 chars]"
    },
    {
      "source": { "id": null, "name": "Ixbt.com" },
      "author": "jin@ixbt.com (Jin)",
      "title": "У Applу уже почти миллиард платных подписок",
      "description": "Компания Apple объявила, что в настоящее время у нее 935 миллионов платных подписок на различные сервисы, включая iCloud, Apple Music, Apple TV+, Apple Arcade, Apple News+, Apple Fitness+, Apple One и Apple Pay. Эти подписки принесли 20,8 млрд долларов в перв…",
      "url": "https://www.ixbt.com/news/2023/02/06/u-applu-uzhe-pochti-milliard-platnyh-podpisok.html",
      "urlToImage": "https://www.ixbt.com/img/n1/news/2023/1/1/Apple-Music-Sing-_large.png",
      "publishedAt": "2023-02-06T04:11:00Z",
      "content": "Apple , 935 , iCloud, Apple Music, Apple TV+, Apple Arcade, Apple News+, Apple Fitness+, Apple One Apple Pay.\r\n 20,8 . 6% , 19,5 . iPhone , Business Essentials, AppleCare, Tap to Pay Apple Financial … [+145 chars]"
    },
    {
      "source": { "id": null, "name": "Ixbt.com" },
      "author": "jin@ixbt.com (Jin)",
      "title": "Телевизоры на базе webOS Hub получили Apple TV, Apple Music, AirPlay и HomeKit",
      "description": "LG заявил, что webOS Hub теперь совместима со всеми недостающими компонентами Apple. Приложения Apple TV, Apple Music, AirPlay и HomeKit доступны для совместимых телевизоров WebOS Hub в более чем 100 странах и регионах. LG сообщает, что в настоящее время она …",
      "url": "https://www.ixbt.com/news/2023/02/06/webos-hub-apple-tv-apple-music-airplay-homekit.html",
      "urlToImage": "https://www.ixbt.com/img/n1/news/2023/1/1/lg-webOS-Hub-apple-tv_large.png",
      "publishedAt": "2023-02-06T04:02:00Z",
      "content": "LG , webOS Hub Apple. Apple TV, Apple Music, AirPlay HomeKit WebOS Hub 100 . LG , 200 , Seiki, Eko, Stream System, Konka, Aiwa Hyundai.\r\n 2022 LG webOS Hub, , , . webOS Hub Apple AirPlay HomeKit.\r\nAi… [+79 chars]"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "百亿补贴：Apple 苹果 Watch Series 8 智能手表 41mm GPS版 2549元包邮",
      "description": "Apple 苹果 Watch Series 8 智能手表 41mm GPS版 2549元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      "url": "https://www.smzdm.com/p/72173504/",
      "urlToImage": "https://y.zdmimg.com/202209/08/631965ce9b2ce9057.jpg_d250.jpg",
      "publishedAt": "2023-02-06T03:37:22Z",
      "content": "Apple Watch Series 8 Apple S8 \r\nApple Watch Series 83256G\r\nApple Watch Series 8 3618"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "Apple 苹果 iPhone 14 Pro Max 5G智能手机 256GB 9099元包邮（满减）",
      "description": "蓝林国内好价汇总：京东自营 Apple产品最高补贴1400元6日-10日每日10点放量，iPhone 14 Pro Max低至7949元京东自营Apple百亿补贴好价持续，继续放大招，京东自营发货售后，省心方便而且还有全网不惧比价的低价防滑粗，2月6日-2月10日每日10点开抢，每日...",
      "url": "https://www.smzdm.com/p/72147758/",
      "urlToImage": "https://qny.smzdm.com/202209/08/631958963a4ce4069.jpg_d250.jpg",
      "publishedAt": "2023-02-06T00:25:11Z",
      "content": "iPhone 14 Pro Max 6.72796*1290460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlways-On\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro Max 29iPhone 14\r\niPh… [+51 chars]"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "10点开始、限地区：Apple 苹果 手机充电器 Type-C 20W 85元",
      "description": "玩家之道适用于iPhone/iPad/iPad Pro/iPad Air，苹果原装充电器，安全不伤机。京东此款目前百亿补贴价85元，商品预约中，6日10点开启抢购～国内好价汇总：京东自营 Apple产品最高补贴1400元6日-10日每日10点放量，iPhone 14 Pro Max低至7...",
      "url": "https://www.smzdm.com/p/72159118/",
      "urlToImage": "https://qny.smzdm.com/202302/02/63da8d3ebf6d34635.jpg_d250.jpg",
      "publishedAt": "2023-02-06T00:21:39Z",
      "content": ":, Apple 20W USB-CUSB-C,, Apple11 ipad Pro12.9 ipad Pro()iphone8,40.9*41.7*26.8mm58g"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "10点开始、限地区：Apple 苹果 iPhone 14 Pro Max 5G智能手机 256GB 8499元包邮",
      "description": "玩家之道iPhone 14系列旗舰超大杯，全新「灵动岛」设计，性能、影像大升级。京东此款目前活动预约价8499元，6日10点开启抢购～",
      "url": "https://www.smzdm.com/p/72158793/",
      "urlToImage": "https://qny.smzdm.com/202301/30/63d7b929769b5140.jpg_d250.jpg",
      "publishedAt": "2023-02-06T00:05:07Z",
      "content": "iPhone 14 Pro Max 6.72796*1290460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlways-On\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro Max 29iPhone 14\r\niPh… [+51 chars]"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "10点开始、限地区：Apple 苹果 iPhone 14 Pro 5G智能手机 128GB 7049元包邮",
      "description": "玩家之道A16仿生芯片加持，4800万像素三摄，影像、性能全面升级。京东此款目前正在预约，活动售价7049元，6日10点开启抢购～",
      "url": "https://www.smzdm.com/p/72158743/",
      "urlToImage": "https://qny.smzdm.com/202209/08/631951c6bfe886330.jpg_d250.jpg",
      "publishedAt": "2023-02-06T00:05:07Z",
      "content": "iPhone 14 Pro6.12556*1179460PPIApp1000HDR16002000 ProMotion Super Retina XDR 1 Hz120 HzAlways-On\r\niPhone 14 ProA164nm160 6 CPU A1520%A16 Bionic 5 GPU 50% 16 17 iPhone 14 Pro23\r\niPhone 14 Pro48002ProR… [+32 chars]"
    },
    {
      "source": { "id": null, "name": "Smzdm.com" },
      "author": null,
      "title": "百亿补贴、好价汇总：Apple 苹果 iPhone 14 Plus 5G智能手机 128GB 5499元包邮（需用券）",
      "description": "玩家之道电池续航加大号，A15仿生一直飙一直快。拼多多iPhone 14 Plus多店铺汇总，页面领取200元优惠券，128GB到手价5499元，256GB到手价6399元，512GB到手价8049元。拼多多百亿补贴多数会多个店铺备用，随时切换，为方便大家选购，本文将目前获取的所有购买店...",
      "url": "https://www.smzdm.com/p/72165917/",
      "urlToImage": "https://qny.smzdm.com/202302/06/63e064c5c679e6366.jpg_d250.jpg",
      "publishedAt": "2023-02-06T02:26:28Z",
      "content": "iPhone 14 miniiPhone 14 Plus6.7 A15 \r\n iPhone 14 6.72778*1284458ppi8001200100%DCI-P360Hz\r\niPhone 14 Plus A15 16 \r\niPhone 14 1200//1.51.949%12MP/1.938%\r\niPhone 14"
    },
    {
      "source": { "id": null, "name": "Developpez.com" },
      "author": null,
      "title": "Les ventes d'Apple chutent de 5 % dans la plus forte baisse trimestrielle du chiffre d'affaires depuis 2016, la première baisse des ventes depuis 2019, malgré 2 milliards d'appareils actifs",
      "description": "Les actions d'Apple ont baiss� de 4 % au premier trimestre 2020, � un moment donn�, lors d'une p�riode de n�gociation prolong�e jeudi. C'�tait juste avant une hausse apr�s qu'Apple ait envoy� des donn�es qui parlaient de perspectives pour le trimestre en cour…",
      "url": "https://ios.developpez.com/actu/341155/Les-ventes-d-Apple-chutent-de-5-pourcent-dans-la-plus-forte-baisse-trimestrielle-du-chiffre-d-affaires-depuis-2016-la-premiere-baisse-des-ventes-depuis-2019-malgre-2-milliards-d-appareils-actifs/",
      "urlToImage": "https://www.developpez.com/images/logos/apple.png",
      "publishedAt": "2023-02-06T02:10:00Z",
      "content": "Les actions d'Apple ont baiss de 4 % au premier trimestre 2020, un moment donn, lors d'une priode de ngociation prolonge jeudi. C'tait juste avant une hausse aprs qu'Apple ait envoy des donnes qui pa… [+4121 chars]"
    },
    {
      "source": { "id": null, "name": "512pixels.net" },
      "author": "Stephen Hackett",
      "title": "Mac Power Users #678: Sales and Studies, with Kerry Provenzano",
      "description": "This week on Mac Power Users: Relay FM's VP of Sales drops by the show to talk about her Apple gear, keeping multiple projects going at once and why she has built much of her workflow around Airtable. Kerry is an integral part of Relay FM, and I'm glad we fin…",
      "url": "https://512pixels.net/2023/02/mpu-678/",
      "urlToImage": "https://512pixels.net/wp-content/uploads/2021/10/cropped-logo.png",
      "publishedAt": "2023-02-06T02:36:56Z",
      "content": "This week on Mac Power Users:\r\nRelay FM’s VP of Sales drops by the show to talk about her Apple gear, keeping multiple projects going at once and why she has built much of her workflow around Airtabl… [+86 chars]"
    },
    {
      "source": { "id": null, "name": "International Business Times" },
      "author": "Athena Chan",
      "title": "Japanese Dollar Store Daiso Recalls Various Snacks Over Allergy Concerns",
      "description": "Those who have an allergy or sensitivity may \"run the risk of serious or life-threatening allergic reaction.\"",
      "url": "https://www.ibtimes.com/japanese-dollar-store-daiso-recalls-various-snacks-over-allergy-concerns-3664635",
      "urlToImage": "https://d.ibtimes.com/en/full/3198851/chocolate-2599637-1280.jpg",
      "publishedAt": "2023-02-06T04:00:22Z",
      "content": "KEY POINTS\r\n<ul><li>The packaging didn't 'adequately' note the presence of all allergens</li><li>The products were sold at Daiso stores across six states in the U.S.</li><li>Customers may return the … [+2457 chars]"
    },
    {
      "source": { "id": null, "name": "International Business Times" },
      "author": "AFP News",
      "title": "Most Asian Markets Drop As US Jobs Fan Rate Worries",
      "description": "Most Asian markets drop as US jobs fan rate worries",
      "url": "https://www.ibtimes.com/most-asian-markets-drop-us-jobs-fan-rate-worries-3664667",
      "urlToImage": "https://d.ibtimes.com/en/full/4415960/dollar-surged-against-its-major-peers-after-strong-us-jobs-data-fanned-bets-more-federal-reserve.jpg",
      "publishedAt": "2023-02-06T03:27:25Z",
      "content": "The dollar surged against its major peers after the strong US jobs data fanned bets on more Federal Reserve interest rate hikesAFP\r\nAsian markets mostly fell Monday and the dollar extended gains afte… [+3855 chars]"
    },
    {
      "source": { "id": null, "name": "Www.abc.es" },
      "author": "(abc)",
      "title": "Nuevo Alpine A110 R: diez detalles que lo hacen diferente",
      "description": "La última versión del Alpine A110 es la más esperada por los conductores más deportivo, totalmente orientada al placer del pilotaje al límite y al uso en los 'track days', aunque también homologado para circular por la calle. Te contamos diez detalles que hac…",
      "url": "https://www.abc.es/motor/novedades/nuevo-alpine-a110-diez-detalles-diferente-20230206131221-nt.html",
      "urlToImage": "https://s1.abcstatics.com/abc/www/multimedia/motor/2023/02/03/alpine4-U84206564766lzH-1024x512@abc.jpg",
      "publishedAt": "2023-02-06T00:01:27Z",
      "content": "La última versión del Alpine A110 es la más esperada por los conductores más deportivo, totalmente orientada al placer del pilotaje al límite y al uso en los 'track days', aunque también homologado p… [+5714 chars]"
    },
    {
      "source": { "id": null, "name": "Gartner.com" },
      "author": null,
      "title": "Gartner Says Top 10 Semiconductor Buyers Decreased Chip Spending by 7.6% in 2022",
      "description": "The top 10 global original equipment manufacturers (OEMs) decreased their chip spending by 7.6% and accounted for 37.2% of the total market in 2022, according to preliminary results by Gartner, Inc. Global inflation and recession pressures sharply weakened de…",
      "url": "https://www.gartner.com/en/newsroom/press-releases/2023-02-06-gartner-says-top-10-semiconductor-buyers-decreased-chip-spending-by-seven-percent-in-2022",
      "urlToImage": "https://emtemp.gcom.cloud/ngw/globalassets/en/newsroom/images/covers/gartner-press-release.png",
      "publishedAt": "2023-02-06T04:56:47Z",
      "content": "The top 10 global original equipment manufacturers (OEMs) decreased their chip spending by 7.6% and accounted for 37.2% of the total market in 2022, according to preliminary results by Gartner, Inc. … [+4786 chars]"
    },
    {
      "source": { "id": null, "name": "Digitimes" },
      "author": "DIGITIMES",
      "title": "India roundup: Apple supplier reportedly begins making component for AirPods in India",
      "description": "Apple's supplier Jabil reportedly begins making plastic enclosures in India. Samsung Electronics announced to make the latest flagship Galaxy S23 production in India.",
      "url": "https://www.digitimes.com/news/a20230206VL200/apple-india-roundup.html",
      "urlToImage": "https://img.digitimes.com/newsshow/20230206vl200_files/1_2b.jpg",
      "publishedAt": "2023-02-06T02:33:56Z",
      "content": "Save my User ID and Password\r\nSome subscribers prefer to save their log-in information so they do not have to enter their User ID and Password each time they visit the site. To activate this function… [+307 chars]"
    },
    {
      "source": { "id": null, "name": "Iphone-mania.jp" },
      "author": "lunatic",
      "title": "Appleは春に新製品発表イベントを開催する？",
      "description": "Appleは約1年1カ月前となる現地時間2022年3月8日に「Peek Performance」イベントを開催、iPhone SE（第3世代）、iPad Air（第5世代）、Mac Studio、Studio Displayなどを発表しました。\n Appleは今年も春に新製品発表イベントを開催するのでしょうか。開催する場合の日程や発表する製品について、過去のイベント開催日、そして複数のメディアの情報や予想をもとに予想してみました。\n過去数年のイベント開催日\nまず過去数年の春のイベント開催日と、発表された製品を振り…",
      "url": "https://iphone-mania.jp/news-522776/",
      "urlToImage": "https://iphone-mania.jp/uploads/2023/02/06/ffad15f4e1c770f281c58775c5499b09-e1675642230836.png",
      "publishedAt": "2023-02-06T02:16:52Z",
      "content": "Apple11202238Peek PerformanceiPhone SE3iPad Air5Mac StudioStudio DisplayApple\r\n202238\r\nPeek Performance2021420\r\nSpring Loaded2020\r\n2019325\r\nIt&amp;rsquor;s show time2018327\r\nLane Technical College Pr… [+459 chars]"
    },
    {
      "source": { "id": null, "name": "Kocpc.com.tw" },
      "author": "Ross Wang",
      "title": "帶來「iPhone X 式」進化的 Ultra 版 iPhone 傳明年降臨，價格更高但依然會供不應求？",
      "description": "常發現 iPhone 時常是改越多越罵越多甚至加價賣卻也是賣得好（咦）。記憶最鮮明的案例，大概就是 2017 年蘋果首支採用所謂全螢幕規格的 iPhone X 了吧？現在看來，Apple 似乎打算故技重施了。繼續閱讀帶來「iPhone X 式」進化的 Ultra 版 iPhone 傳明年降臨，價格更高但依然會供不應求？報導內文。\nThe post 帶來「iPhone X 式」進化的 Ultra 版 iPhone 傳明年降臨，價格更高但依然會供不應求？ appeared first on 電腦王阿達.",
      "url": "https://www.kocpc.com.tw/archives/479252",
      "urlToImage": "https://www.kocpc.com.tw/wp-content/uploads/2022/12/1670070168-9b481cc7524ea6ca9971b23849a920d7.jpg",
      "publishedAt": "2023-02-06T02:26:02Z",
      "content": "iPhone 2017 iPhone X Apple iPhone X Ultra iPhone AppleInsider\r\n iPhone 3.5mm 3D Touch Touch ID 2017 iPhone X \r\nApple \r\nMark Gurman Bloomberg 2024 Ultra iPhone Pro Max iPhone 16 Ultra 3.9 \r\nMark Gurma… [+239 chars]"
    },
    {
      "source": { "id": null, "name": "Bloguismo.com" },
      "author": "Villauriz",
      "title": "Un’app di incontri del tutto gratuita – basata sul dispositivo dell’omonimo messo",
      "description": "Un’app di incontri del tutto gratuita – basata sul dispositivo dell’omonimo messo Complici le giornate frenetiche, lo stress usato e – diciamocelo – la cattiva consueto di governare una attivita sociale filtrata dai Accommodant Media, comprendere dal esuberan…",
      "url": "https://www.bloguismo.com/un-app-di-incontri-del-tutto-gratuita-basata-sul-2/",
      "urlToImage": "https://g.twimg.com/Twitter_logo_blue.png",
      "publishedAt": "2023-02-06T04:00:21Z",
      "content": "Un’app di incontri del tutto gratuita basata sul dispositivo dell’omonimo messo\r\nComplici le giornate frenetiche, lo stress usato e diciamocelo la cattiva consueto di governare una attivita sociale f… [+4188 chars]"
    },
    {
      "source": { "id": null, "name": "Huffingtonpost.jp" },
      "author": "Daniel Welsh",
      "title": "オバマ元米大統領からスティーブ・ジョブズまで... グラミー賞を受賞している意外な著名人9人",
      "description": "オバマ元米大統領、マペットのミス・ピギー、スティーブ・ジョブズもっと読む：グラミー賞のドレス、全身バラや、カラフルジャンプスーツ、牛…？レッドカーペットを飾った注目スタイル\r\n2月6日の今日、アメリカではグラミー賞授賞式が開催されている。アメリカ音楽界最高の栄誉とも呼ばれるグラミー賞ーー。ビヨンセやレディー・ガガ、テイラー・スウィフトなどの有名アーティストがこれまで数多くのグラミー賞を受賞している。しかし、実は音楽アーティスト以外にも、同賞を受賞している意外な著名人たちがいる。グラミー賞には、主要の最優秀レコード…",
      "url": "https://www.huffingtonpost.jp/entry/story_jp_63e06674e4b07c0c7e0ae983",
      "urlToImage": "https://img.huffingtonpost.com/asset/63e0743c2600001a0022b5b5.jpg?cache=exW25WUacN&ops=1200_630",
      "publishedAt": "2023-02-06T04:27:30Z",
      "content": "Entertainment Reporter, The Huffington Post UK"
    },
    {
      "source": { "id": null, "name": "Sopitas.com" },
      "author": "Sergio Ramírez",
      "title": "¿Eagles o Chiefs? Alexa y Siri ya saben quién ganará el Super Bowl LVII",
      "description": "El Super Bowl LVII ya está definido por la inteligencia artificial, pues los asistentes de inteligencia artificial ya han arrojado sus pronósticos para este 12 de...\nThe post ¿Eagles o Chiefs? Alexa y Siri ya saben quién ganará el Super Bowl LVII appeared fir…",
      "url": "https://www.sopitas.com/deportes/pronostico-alexa-siri-super-bowl-eagles-vs-chiefs/",
      "urlToImage": "https://www.sopitas.com/wp-content/uploads/2023/02/pronostico-alexa-siri-super-bowl-eagles-vs-chiefs.jpg",
      "publishedAt": "2023-02-06T00:02:43Z",
      "content": "El Super Bowl LVII ya está definido por la inteligencia artificial, pues los asistentes de inteligencia artificial ya han arrojado sus pronósticos para este 12 de febrero en Arizona, sede del duelo e… [+2625 chars]"
    },
    {
      "source": { "id": null, "name": "Gamebiz.jp" },
      "author": null,
      "title": "Cygames、『ウマ娘 プリティーダービー』の新作ショートアニメシリーズ「うまゆる」の第5弾主題歌を配信！ キャストからのメッセージをお届け",
      "description": "Cygamesはクロスメディアコンテンツ『ウマ娘 プリティーダービー』について、 新作ショートアニメシリーズ『うまゆる』の第5弾主題歌を、 本日2月6日（月）より配信開始した。『うまゆる』は、『ウマ娘 プリティーダービー』として初の配信で展開されるアニメシリーズで、公式YouTubeチャンネル「ぱかチューブっ！」（https://www.youtube.com/channel/UCAWxPGGu…",
      "url": "https://gamebiz.jp/news/363931",
      "urlToImage": "https://i3.gamebiz.jp/media/c1cc0ad7-0ed5-4ede-9aa2-f28086936ac9.png",
      "publishedAt": "2023-02-06T04:01:00Z",
      "content": "Cygames 5 26\r\n YouTubehttps://www.youtube.com/channel/UCAWxPGGuIfWME2KTLUmSCHw17\r\n175Bright Melody26\r\nBright Melody21\r\n5Bright Melody (HANO) (HANO), (HANO) (CV. ), (CV. ), (CV. ), (CV. ), (CV.)Apple … [+255 chars]"
    },
    {
      "source": { "id": null, "name": "CNA" },
      "author": null,
      "title": "Retailers offering discounts on high-end iPhones in China",
      "description": "SHANGHAI : Third party retailers in China are offering discounts of as much as 10 per cent on Apple Inc's iPhones 14 Pro amid sluggish demand for smartphones.Electronics vendors JD.Com Inc and Suning are currently selling the iPhone 14 Pro basic model for 7,1…",
      "url": "https://www.channelnewsasia.com/business/retailers-offering-discounts-high-end-iphones-china-3256436",
      "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--BYNV11Ue--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/one-cms/images/2021-06/business_1.png?itok=rGtz_C8Z",
      "publishedAt": "2023-02-06T03:23:58Z",
      "content": "SHANGHAI : Third party retailers in China are offering discounts of as much as 10 per cent on Apple Inc's iPhones 14 Pro amid sluggish demand for smartphones.\r\nElectronics vendors JD.Com Inc and Suni… [+552 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Mark Mcgreal",
      "title": "2023 Grammy Awards: Bebe Rexha puts on busty display in tiny pink gown and matching gloves",
      "description": "Bebe Rexha put her ample bust on display while walking the 65th Annual Grammy Awards' red carpet in Los Angeles. The 33-year-old singer-songwriter donned a tiny pink dress.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716657/2023-Grammy-Awards-Bebe-Rexha-puts-busty-display-tiny-pink-gown-matching-gloves.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67355145-0-image-a-96_1675645656368.jpg",
      "publishedAt": "2023-02-06T01:20:23Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Chloe-lee Longhetti",
      "title": "Charli XCX bemoans her album Crash not being nominated for a Grammy Award",
      "description": "Charli XCX has spoken out after her hit album Crash failed to get nominated for a Grammy Award this year.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716649/Charli-XCX-bemoans-album-Crash-not-nominated-Grammy-Award.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67354841-0-image-a-61_1675645217590.jpg",
      "publishedAt": "2023-02-06T01:13:35Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Deirdre Simonds",
      "title": "2023 Grammy Awards: Lizzo makes a bold statement in an orange gown with head-to-toe flowers",
      "description": "Lizzo ensured she caught the world's attention as she arrived to the 2023 Grammy Awards in a dramatic orange Dolce & Gabbana dress with a plunging neckline.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716779/2023-Grammy-Awards-Lizzo-makes-bold-statement-orange-gown-head-toe-flowers.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67355419-0-image-a-49_1675646490238.jpg",
      "publishedAt": "2023-02-06T01:31:52Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Jacqueline Lindenberg",
      "title": "Grammy Awards 2023: Brandi Carlile dazzles in rhinestone ensemble and hot pink blouse on red carpet",
      "description": "Brandi Carlile turned heads wearing a black ensemble with sparkling details along with a hot pink blouse as she stepped onto the glamorous red carpet at the 2023 Grammy Awards.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716581/Grammy-Awards-2023-Brandi-Carlile-dazzles-rhinestone-ensemble-hot-pink-blouse-red-carpet.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/00/67354813-0-image-a-31_1675645057387.jpg",
      "publishedAt": "2023-02-06T01:20:03Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Sharon Mai",
      "title": "Grammy Awards 2023: Paris Hilton dazzles in a rhinestone gown while posing on the red carpet",
      "description": "At the Grammy Awards 2023 , the 41-year-old entrepreneur made her first red carpet appearance since welcoming her baby with husband Carter Reum via surrogacy last month.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716781/Grammy-Awards-2023-Paris-Hilton-dazzles-rhinestone-gown-posing-red-carpet.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67357061-0-image-a-49_1675649257562.jpg",
      "publishedAt": "2023-02-06T01:53:07Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Sharon Mai",
      "title": "Grammy Awards 2023: Charli D'Amelio and Landon Barker sport matching black outfits on the red carpet",
      "description": "The 18-year-old TikTok star stunned in a black minidress with a tulle at the hips while the 19-year-old son of Blink-182 drummer Travis Barker donned a stylish black suit with cutouts at the side.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716703/Grammy-Awards-2023-Charli-DAmelio-Landon-Barker-sport-matching-black-outfits-red-carpet.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67353549-0-image-a-91_1675645244820.jpg",
      "publishedAt": "2023-02-06T01:05:25Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Jacqueline Lindenberg",
      "title": "Grammy Awards 2023: Megan Fox stuns in sparkling dress while Machine Gun Kelly dons metallic suit",
      "description": "Machine Gun Kelly turned heads wearing an eye-catching silver suit while his fiance, Megan Fox, donned a fitted white bustier dress, after she revealed she has a 'broken wrist' and 'concussion.'",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716831/Grammy-Awards-2023-Megan-Fox-stuns-sparkling-dress-Machine-Gun-Kelly-dons-metallic-suit.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67357273-0-image-a-53_1675649799006.jpg",
      "publishedAt": "2023-02-06T03:13:40Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Nola Ojomu",
      "title": "Grammys Awards 2023: Kim Petras becomes the first transwoman to win Best Pop Duo/Group gong",
      "description": "The pair are the first ever  transgender and non-binary artists to land the honor.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716855/Grammys-Awards-2023-Kim-Petras-transwoman-win-Best-Pop-Duo-Group-gong.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67357499-0-image-a-166_1675651045294.jpg",
      "publishedAt": "2023-02-06T02:52:34Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Paul Chavez",
      "title": "Grammy Awards 2023: Adele stuns in gorgeous long red dress while attending with boyfriend Rich Paul",
      "description": "The 34-year-old English singer stunned in a hugging red dress on Sunday while attending the Grammy Awards with her boyfriend Rich Paul in Los Angeles.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716967/Grammy-Awards-2023-Adele-stuns-gorgeous-long-red-dress-attending-boyfriend-Rich-Paul.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/04/67360993-0-image-a-43_1675656782048.jpg",
      "publishedAt": "2023-02-06T05:14:03Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12840 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Deirdre Simonds",
      "title": "2023 Grammy Awards: Laverne Cox rocks a black gown with ancient Egyptian deities on the bust",
      "description": "Laverne Cox put on a glamorous display in a stunning black gown, with bronze ancient Egyptian deities adorned on her bust, at the 65th Grammy Awards in Los Angeles.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716467/2023-Grammy-Awards-Laverne-Cox-rocks-black-gown-ancient-Egyptian-deities-bust.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/05/23/67352421-0-image-a-20_1675641507131.jpg",
      "publishedAt": "2023-02-06T00:03:05Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Parton - Some… [+12507 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Justin Enriquez",
      "title": "Grammy Awards 2023 WINNERS: Superstar singers and songwriters are honored on music's biggest night",
      "description": "The 41-year-old A-lister won Best Traditional R&B Performance for Plastic Off The Sofa and Best Dance/Electronic Recording for Break My Soul before the awards show aired live.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716647/Grammy-Awards-2023-WINNERS-Superstar-singers-songwriters-honored-musics-biggest-night.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67354867-0-image-a-6_1675645275621.jpg",
      "publishedAt": "2023-02-06T01:02:39Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Adam S. Levy, Christine Rendon",
      "title": "Grammy Awards 2023: Host Trevor Noah makes Harry Styles blush and jokes about Chinese spy balloon",
      "description": "The Johannesburg, South Africa-born TV personality called the As It Was singer the 'sex symbol of the globe, especially now that they killed off the green M&M.'",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716773/Grammy-Awards-2023-Host-Trevor-Noah-makes-Harry-Styles-blush-jokes-Chinese-spy-balloon.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67357937-0-image-a-56_1675651052327.jpg",
      "publishedAt": "2023-02-06T02:39:42Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Kevin Kayhart",
      "title": "Dwayne 'The Rock' Johnson and wife Lauren Hashian attend Grammys... hours after wrapping new film",
      "description": "Dwayne 'The Rock' Johnson made his fashion statement at the Grammys in a gold suit alongside wife Lauren Hashian in leggy silver dress, just hours after wrapping new film Red One.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716837/Dwayne-Rock-Johnson-wife-Lauren-Hashian-attend-Grammys-hours-wrapping-new-film.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67357613-0-image-a-67_1675650264706.jpg",
      "publishedAt": "2023-02-06T02:35:33Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Sharon Mai",
      "title": "Grammy Awards 2023: Amber Rose looks chic in a black minidress on the red carpet at the Grammys",
      "description": "The 39-year-old rapper also seemingly squashed any beef with entertainer Jason Lee by posing together on the red carpet after their infamous online feud in 2017.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716937/Grammy-Awards-2023-Amber-Rose-looks-chic-black-minidress-red-carpet-Grammys.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67358327-0-image-a-67_1675651948262.jpg",
      "publishedAt": "2023-02-06T03:15:13Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Deirdre Simonds",
      "title": "2023 Grammy Awards: Adele is left BLUSHING after finally meeting Dwayne 'The Rock' Johnson",
      "description": "Adele received the surprise of a lifetime from three-time Grammys host Trevor Noah at the 2023 Grammy Awards in Los Angeles, California on Sunday night.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716901/2023-Grammy-Awards-Adele-left-BLUSHING-finally-meeting-Dwayne-Rock-Johnson.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/02/67356905-0-image-a-80_1675650608360.jpg",
      "publishedAt": "2023-02-06T02:35:13Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Mail" },
      "author": "Sonia Horon",
      "title": "Grammy Awards 2023: Shania Twain commands attention in a Dalmatian inspired sequin suit and epic hat",
      "description": "Shania Twain wore an eye-catching ensemble to the 65th Grammy Awards in Los Angeles on Sunday.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-11716705/Grammy-Awards-2023-Shania-Twain-commands-attention-Dalmatian-inspired-sequin-suit-epic-hat.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/02/06/01/67355409-0-image-a-68_1675646382618.jpg",
      "publishedAt": "2023-02-06T01:19:57Z",
      "content": "Best American Roots Performance\r\nAaron Neville &amp; The Dirty Dozen Brass Band - Stompin Ground - WINNER\r\nAoife ODonovan &amp; Allison Russell - Prodigal Daughter\r\nBill Anderson Featuring Dolly Part… [+12813 chars]"
    },
    {
      "source": { "id": null, "name": "Web-price.info" },
      "author": "dismoty",
      "title": "マルチ急速充電対応の容量537Whで定格700W出力対応ポータブル電源「BLUETTI EB55」は13台同時給電が可能で大型ライト付きなので備えに有用 - 安値世界一への挑戦 レビュー",
      "description": "BLUETTI ポータブル電源 EB55です。 ポータブル電源の購入を...",
      "url": "https://web-price.info/review/bluetti-eb55.php",
      "urlToImage": null,
      "publishedAt": "2023-02-06T00:55:44Z",
      "content": "BLUETTI ポータブル電源 EB55です。\n\nポータブル電源の購入を検討する際、気になるポイントとしては、安全性・耐久性（寿命）・容量・出力・可搬性・価格など、多岐に渡ると思います。\n\n購入動機として、利用シーンや接続する機器が決まっているという方はその利用シーンに応じて最適なポイントが秀でた製品を選べば良いと思いますが、そうでない方はやはりバランスを求めたいところです。\n\nしかし、市場には… [+5487 chars]"
    },
    {
      "source": { "id": null, "name": "Amass.jp" },
      "author": null,
      "title": "＜第65回グラミー賞＞各受賞作／アーティスト発表",
      "description": "＜第65回グラミー賞＞授賞式が行われ、各受賞作／アーティストが発表。「年間最優秀レコード）」はリゾ、「年間最優秀アルバム」はハリー・スタイルズ、「年間最優秀楽曲」はボニー・レイット、「最優秀新人賞」はサマラ・ジョイ　https://amass.jp/164335/",
      "url": "https://amass.jp/164335/",
      "urlToImage": "https://amassing2.sakura.ne.jp/image/jacket/300/2014b/41184.jpg",
      "publishedAt": "2023-02-06T05:16:00Z",
      "content": "65Record of the YearAlbum of the YearSong of the YearBest New ArtistRecord of the Year\r\nAbout Damn Time, Lizzo\r\nAlbum of the Year\r\nHarrys House, Harry Styles\r\nSong of the Year\r\nJust Like That, Bonnie… [+8666 chars]"
    },
    {
      "source": { "id": null, "name": "Mirror Online" },
      "author": "mirrornews@mirror.co.uk (Benedict Tetzlaff-Deas)",
      "title": "BREAKING: Massive magnitude 7.7 earthquake hits Turkey with aftershocks felt in multiple countries",
      "description": "An earthquake has hit Turkey and felt across multiple countries - we'll be bringing you the very latest updates, pictures and video on this breaking news story.",
      "url": "https://www.mirror.co.uk/news/world-news/breaking-massive-magnitude-77-earthquake-29141510",
      "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article29141528.ece/ALTERNATES/s1200/1_BREAKING-78-magnitude-earthquake-hits-southern-Turkey-Major-damage-reported.jpg",
      "publishedAt": "2023-02-06T01:51:21Z",
      "content": "A large earthquake has hit Turkey with aftershocks felt in multiple countries.\r\nThe magnitude 7.7 quake was detected in the southeast of the nation early on Monday, with some witnesses reporting shak… [+1127 chars]"
    },
    {
      "source": { "id": null, "name": "Mirror Online" },
      "author": "mirrornews@mirror.co.uk (Rebecca Cook)",
      "title": "Jeremy Clarkson farm chaos in new series - shop confession, dire profits and vandals",
      "description": "Jeremy Clarkson is back for another year in the life at the Diddly Squat farm as harvest season begins, but The Grand Tour presenter is in dire straights",
      "url": "https://www.mirror.co.uk/tv/tv-news/jeremy-clarkson-farm-chaos-new-29115919",
      "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article29115994.ece/ALTERNATES/s1200/1_EOB_4678EOBEOB.jpg",
      "publishedAt": "2023-02-06T00:01:00Z",
      "content": "Jeremy Clarkson is returning to Amazon Prime screens with a fresh series of Clarksons Farm this month.\r\nYet its not all sunshine on Diddly Squat Farm as Britain's best-known but least-qualified amate… [+2625 chars]"
    },
    {
      "source": { "id": null, "name": "Ithome.com" },
      "author": null,
      "title": "DSCC：随着苹果转向 OLED，MiniLED 面板的出货量增长预计只能增长到 2024 年",
      "description": "IT之家 2 月 6 日消息，据显示领域分析机构 Display Supply Chain Consultants 称，因为苹果将在其 iPad 平板电脑和随后的 MacBook 笔记本电脑中应用 OLED 面板而不是 MiniLED 面板，他们认为 MiniLED 面板的出货量增长最多将持续到 2024 年，但从 2025 年开始基本停止。分析师预计，今年 MiniLED 面板出货量将达到 2447 万片，2024 年将达到 3023 万片。DSCC 在其预测中表示，从 2025 年到 2027 年，年出货量将…",
      "url": "https://www.ithome.com/0/671/399.htm",
      "urlToImage": null,
      "publishedAt": "2023-02-06T01:02:00Z",
      "content": "IT 2 6 Display Supply Chain Consultants iPad MacBook OLED MiniLED MiniLED 2024 2025 \r\n MiniLED 2447 2024 3023 DSCC 2025 2027 3000 MiniLED \r\nIT 2021  iPad Macbook MiniLED M1 M2 iPad OLED 2025 Macbook … [+132 chars]"
    },
    {
      "source": { "id": null, "name": "Japancamerahunter.com" },
      "author": "Jesse Freeman",
      "title": "IN YOUR BAG 1751 – SATYA RODRIGO",
      "description": "IN YOUR BAG 1751 – SATYA RODRIGO For this week’s “In Your Bag” we have a good one from Satya! The pair of Leicas are always nice, but the JCH film cases though haha…check it out below: This is my smallest on the go- camera bag for minimal gear that I use. Bag…",
      "url": "https://www.japancamerahunter.com/2023/02/in-your-bag-1751-satya-rodrigo/",
      "urlToImage": "https://www.japancamerahunter.com/wp-content/uploads/2023/02/In-your-bag-Satya-Rodrigo.jpeg",
      "publishedAt": "2023-02-06T01:08:29Z",
      "content": "For this weeks In Your Bag we have a good one from Satya! The pair of Leicas are always nice, but the JCH film cases though hahacheck it out below:\r\nThis is my smallest on the go- camera bag for mini… [+3468 chars]"
    },
    {
      "source": { "id": null, "name": "Arigato-ipod.com" },
      "author": "Ygn",
      "title": "【新製品】「HP ENVY Inspire 7220 All-in-One Wireless Printer」Apple公式サイトで販売開始",
      "description": "Apple公式サイトで「HP ENVY Inspire 7220 All-in-One Wireless Printer」が販売開始されています。 A4インクジェットプリンタ、スキャナ、コピーの機能を備えた複合機です。 ...\nThe post 【新製品】「HP ENVY Inspire 7220 All-in-One Wireless Printer」Apple公式サイトで販売開始 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/02/hp-envy-inspire-7220-all-in-one-wireless-printer.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/02/230206hpenvyinspire7220printer.jpg",
      "publishedAt": "2023-02-06T03:01:00Z",
      "content": "Apple公式サイトで「HP ENVY Inspire 7220 All-in-One Wireless Printer」が販売開始されています。\n\n\nA4インクジェットプリンタ、スキャナ、コピーの機能を備えた複合機です。\nAirPrintに対応し、iPhone/iPad/Macとワイヤレス接続してプリントできます。\n\nHP Smartアプリを使って、設定や管理、コピー用画像のスキャンなどができ… [+551 chars]"
    },
    {
      "source": { "id": null, "name": "Prtimes.jp" },
      "author": null,
      "title": "コーン・フェリーとFORTUNE誌『世界で最も賞賛される企業 2023』を発表",
      "description": "[コーン・フェリー・ジャパン]\n[画像: https://prtimes.jp/i/30621/60/resize/d30621-60-e784ce131895f33b8b09-0.jpg ]\n\n\n2023年全業界（オールスター）トップ50\n総合順位　企業名\n1 Apple\n2 Microsoft\n3 Amazon.com\n4 Berkshire Hathaway\n5 JP...",
      "url": "https://prtimes.jp/main/html/rd/p/000000060.000030621.html",
      "urlToImage": "https://prtimes.jp/i/30621/60/ogp/d30621-60-e784ce131895f33b8b09-0.jpg",
      "publishedAt": "2023-02-06T01:00:00Z",
      "content": "2023501 Apple2 Microsoft3 Amazon.com4 Berkshire Hathaway5 JPMorgan Chase6 Walt Disney7 Costco Wholesale8 Pfizer9 Alphabet10 American Express11 Salesforce12 Delta Air Lines13 Walmart14 Starbucks15 Coc… [+843 chars]"
    },
    {
      "source": { "id": null, "name": "Prtimes.jp" },
      "author": null,
      "title": "Opensignal、スマートフォンの衛星通信の動向分析結果を発表、日本における衛星スマートフォンのビジネスチャンスを定量的に評価",
      "description": "[Opensignal]\nOpensignal（本社：ロンドン）は、スマートフォンの衛星通信の動向について分析し、その結果を発表しました。スマートフォンによる衛星通信が世界の一部の市場に導入され、日本を含めた他の市場にも導入されつつ...",
      "url": "https://prtimes.jp/main/html/rd/p/000000026.000054143.html",
      "urlToImage": "https://prtimes.jp/i/54143/26/ogp/d54143-26-fb7822abb66cace9cbfb-0.png",
      "publishedAt": "2023-02-06T01:40:03Z",
      "content": "Opensignal\r\n20229 iPhone 14 Apple iPhone \r\n4\r\n<ul><li>AST</li><li>Skylo TechnologiesIoTInternet of Things </li><li>KDDIStarlink</li><li>NTT JSATRAN</li></ul>NTT\r\n0.26%0.18%0.52%\r\nWi-Fi\r\nRANIoT\r\nDL: h… [+160 chars]"
    },
    {
      "source": { "id": null, "name": "Prtimes.jp" },
      "author": null,
      "title": "【2023年4月グランドオープン】～日本初。りんご農家がりんご好きに贈るApple×Glamping～【果樹園グランピングヴィラHARASAWA】",
      "description": "[ブッキングリゾート]\n[画像1: https://prtimes.jp/i/52784/166/resize/d52784-166-6c918d03730ef50c75e4-1.jpg ]\n\n[画像2: https://prtimes.jp/i/52784/166/resize/d52784-166-45fb1ef8828f946d555b-4.jpg ]\n\nCONCEPT\n～全国のりんご...",
      "url": "https://prtimes.jp/main/html/rd/p/000000166.000052784.html",
      "urlToImage": "https://prtimes.jp/i/52784/166/ogp/d52784-166-6c918d03730ef50c75e4-1.jpg",
      "publishedAt": "2023-02-06T03:40:03Z",
      "content": "CONCEPT\r\n66IC1\r\n50HARASAWA230,000\r\nHARASAWA\r\n30501230,000BBQ×\r\n1\r\n3050\r\n5030912\r\n1230,000\r\n30,000HARASAWA12 The Apple21186Plum1\r\nBBQ\r\nHARASAWABBQBBQBBQ\r\n2\r\n×\r\n550M\r\n1\r\nHARASAWAPlum1\r\n66IC115HARASAWA:… [+340 chars]"
    },
    {
      "source": { "id": null, "name": "Prtimes.jp" },
      "author": null,
      "title": "たった一呼吸で「とろける」美味しさを追求したCBDプロダクト誕生",
      "description": "[hu]\n[画像1: https://prtimes.jp/i/110653/1/resize/d110653-1-9f21ce8df148a7185d1a-0.jpg ]\n\n「hu（フー）」公式サイト：https://hu-cbd.jp/\n世界で、市場を広げているCBD※2。日本でも、現在400以上のブランドがで...",
      "url": "https://prtimes.jp/main/html/rd/p/000000001.000110653.html",
      "urlToImage": "https://prtimes.jp/i/110653/1/ogp/d110653-1-9f21ce8df148a7185d1a-0.jpg",
      "publishedAt": "2023-02-06T02:10:00Z",
      "content": "huhttps://hu-cbd.jp/CBD2400SNShuCBD21CBD\r\nCBDCBD\r\nCBD VAPE¥5,660<ol><li>hu Device Lite - Blue</li><li>hu Device Lite - Orange</li><li>hu Device Lite - Magenta</li><li>hu Device Lite - Beige Gray</li>… [+1276 chars]"
    },
    {
      "source": { "id": null, "name": "Droidsans.com" },
      "author": "Waiwy4.0",
      "title": "iPhone 16 Ultra คาดเป็นมือถือรุ่นสูง ราคาแพงกว่า Pro หลัง Tim Cook มองลูกค้าพร้อมจ่าย",
      "description": "ขาข่าว Apple แอบกระซิบบอกว่า ทางบริษัทกำลังหารือจะขยายไลน์สมาร์ทโฟน iPhone 16 ที่วางขายในปี 2024 ให้มีรุ่น Ultra เพิ่มเข้ามาด้วย เป็นข่าวที่ดูมีความเป็นไปได้สูงหลัง Tim Cook เพิ่งเผยรายงานการดำเนินงาน ยอมรับว่าลูกค้าของ Apple นั้นพร้อมที่จะจ่ายเงินหนัก เพื่อใ…",
      "url": "https://droidsans.com/iphone-16-ultra-premium-phone-may-launch-in-2024/",
      "urlToImage": "https://images.droidsans.com/wp-content/uploads/2023/02/photo_2023-02-06_10-58-32-1000x600.jpg",
      "publishedAt": "2023-02-06T04:06:55Z",
      "content": "Apple iPhone 16 2024 Ultra Tim Cook Apple \r\nMark Gurman Bloomberg Apple iPhone Apple iPhone 14 Series 14 14 Plus Pro \r\n iPhone 15 Pro Max Periscope Optical\r\n2024 iPhone 16 Ultra iPhone 16, 16 Plus, 1… [+220 chars]"
    }
  ]

constructor(){
  super();
  

  this.state = {
    articles :this.acticles,
    loading :false
  }
}

  render() {
    return (
      <div className="container my-4">
      <h2>News Monkey - Top headlines</h2>
        <div className="row">
          <div className="col-md-4 ">
            <NewsItem
              title="this is a title"
              description="this is my descriptiojn"
              imgUrl ="https://i.insider.com/63d5e1d2fc18470019553c12?width=1200&format=jpeg"
              NewsUrl ="/TODO"
            />
          </div>
          <div className="col-md-4 ">
            <NewsItem
              title="this is a title"
              description="this is my descriptiojn"
            />
          </div>
          <div className="col-md-4 ">
            <NewsItem
              title="this is a title"
              description="this is my descriptiojn"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
