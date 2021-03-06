/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGVME5V',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'positiveAdjectivesWithJile',
  structures: ['Subj. + Positive Adj. + 极了'],
  description:
    'Just as 死了 (sǐle) can be used to intensify negative adjectives, 极了 (jíle) can be used to intensify positive adjectives. This is used in spoken, colloquial Chinese. 极 means "extreme" or "utmost," so using this grammar pattern takes your positive adjectives to the extreme!',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(极了)/)]),
  examples: [
    {
      zh: '她好看极了。',
      en: 'She is very pretty.',
      src: allSetSrc,
    },
    {
      zh: '这个啤酒好喝极了。',
      en: 'This beer is very tasty.',
      src: allSetSrc,
    },
    {
      zh: '你的中文好极了。',
      en: 'Your Chinese is very good!',
      src: allSetSrc,
    },
  ],
};
