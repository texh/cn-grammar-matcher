/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG6ZI8L',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'wulun',
  structures: ['无论 + Circumstances + 都 / 也 + Inevitable Result'],
  description:
    '无论 (wúlùn)  means "no matter," and is generally used in the first part of the sentence. As with many other constructions, 都 and 也 can be used in the second part of the sentence to emphasize the action or decision will not change. It is more formal than 不管.',
  sources: [allSetSrc],
  match: sentence =>
    mergeLocMatchGroups([regexMatchLocs(sentence.text, /(无论)[^都也，]+((?:都|也|，))/)]),
  examples: [
    {
      zh: '无论怎么样，他都会放弃，别高估他。',
      en: "No matter what it's like, he will give up. Don't overestimate him.",
      src: allSetSrc,
    },
    {
      zh: '无论多么成功，他总觉得自己不够好。',
      en: "No matter how successful he is, he always thinks he isn't enough.",
      src: allSetSrc,
    },
    {
      zh: '无论你到哪儿我都会跟着你。',
      en: 'Wherever you go, I will follow you.',
      src: allSetSrc,
    },
    {
      zh: '无论你说还是不说，结果都一样。',
      en: 'Whatever you say, the result will be the same.',
      src: allSetSrc,
    },
  ],
};
