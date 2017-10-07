/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { regexMatchLocs } = require('../lib/matching/regexMatch');
const { mergeLocMatchGroups } = require('../lib/matching/utils');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG3544U',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'zui',
  name: '最 + Adj.',
  description:
    'The most common way to form a superlative (best, worst, biggest, smallest, etc.) in Chinese is to use 最 (zuì) before an adjective (and a few select verbs).',
  sources: [allSetSrc],
  match: sentence => {
    const text = sentence.original;
    return mergeLocMatchGroups([
      regexMatchLocs(text, /(最)/),
      regexMatchLocs(text, /(最)[^了]+(了?)/),
    ]);
  },
  examples: [
    {
      zh: '哪个老师最好？',
      en: 'Which teacher is the best?',
      src: allSetSrc,
    },
    {
      zh: '你们家谁最漂亮？',
      en: 'In your family who is the most beautiful?',
      src: allSetSrc,
    },
    {
      zh: 'Zuckerberg最有钱。',
      en: 'Zuckerberg is the richest.',
      src: allSetSrc,
    },
    {
      zh: '汉语最难。',
      en: 'The Chinese language is the most difficult.',
      src: allSetSrc,
    },
    {
      zh: '这种事最麻烦。',
      en: 'These kind of things are the most troublesome.',
      src: allSetSrc,
    },
    {
      zh: '小狗最可爱了。',
      en: 'The puppy is the cutest.',
      src: allSetSrc,
    },
    {
      zh: '四川菜最辣了。',
      en: 'Sichuan food is the spiciest.',
      src: allSetSrc,
    },
    {
      zh: '我的中国朋友最热情了。',
      en: 'My Chinese friend is the most enthusiastic.',
      src: allSetSrc,
    },
    {
      zh: '他的学生最认真了。',
      en: 'His student is the most serious.',
      src: allSetSrc,
    },
    {
      zh: '黄山的风景最美了。',
      en: "Huang Mountain's landscape is the most beautiful.",
      src: allSetSrc,
    },
    {
      zh: '老板最喜欢你了！',
      en: 'The boss likes you the best!',
      src: allSetSrc,
    },
    {
      zh: '你最怕什么？',
      en: 'What do you most fear?',
      src: allSetSrc,
    },
    {
      zh: '我最爱中国菜。',
      en: 'I love Chinese food most.',
      src: allSetSrc,
    },
    {
      zh: '谁最了解你？',
      en: 'Who knows you best?',
      src: allSetSrc,
    },
    {
      zh: '她最讨厌抽烟的男人了。',
      en: 'She most hates men that smoke.',
      src: allSetSrc,
    },
    {
      zh: '你最喜欢什么颜色？',
      en: 'What is your favorite color?',
      src: allSetSrc,
    },
    {
      zh: '你最喜欢什么动物？',
      en: 'What is your favorite animal?',
      src: allSetSrc,
    },
  ],
};
