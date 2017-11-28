/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGIVZJU',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'buyao',
  structures: ['不要 + Verb'],
  description:
    'You can use 不要 (bùyào) to command someone: "don\'t" (do something). This is similar to the other negative command "别 (bié)."',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(不要)/)]),
  examples: [
    {
      zh: '不要走。',
      en: "Don't leave.",
      src: allSetSrc,
    },
    {
      zh: '不要打我！',
      en: "Don't hit me!",
      src: allSetSrc,
    },
    {
      zh: '不要生气，好吗？',
      en: "Don't get angry, OK?",
      src: allSetSrc,
    },
    {
      zh: '不要哭！',
      en: "Don't cry!",
      src: allSetSrc,
    },
    {
      zh: '不要吃很多肉。',
      en: "Don't eat a lot of meat.",
      src: allSetSrc,
    },
    {
      zh: '你们不要喝酒。',
      en: "You guys, don't drink alcohol.",
      src: allSetSrc,
    },
    {
      zh: '不要说英文。',
      en: "Don't speak English.",
      src: allSetSrc,
    },
    {
      zh: '晚上不要喝咖啡。',
      en: "Don't drink coffee at night.",
      src: allSetSrc,
    },
    {
      zh: '上课的时候不要玩手机！',
      en: "In class don't play with your phone!",
      src: allSetSrc,
    },
    {
      zh: '不要很晚睡觉！',
      en: "Don't go to bed too late.",
      src: allSetSrc,
    },
  ],
};
