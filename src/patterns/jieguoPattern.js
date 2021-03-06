/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASG6B21A',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'jieguo',
  structures: ['Situation，结果 + Result / Ending'],
  description:
    '结果 (jiéguǒ) can be used as a conjunction or adverb, meaning "as a result" or "consequently." It comes at the beginning of the sentence and is typically used to introduce a negative or undesirable result.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /，(结果)/)]),
  examples: [
    {
      zh: '她穿得太少了，结果第二天就感冒了。',
      en: "She didn't wear enough, as a result, she had a cold the next day.",
      src: allSetSrc,
    },
    {
      zh: '我昨天去跟朋友喝酒，结果喝醉了。',
      en: 'I went to have a drink with my friends yesterday. As a result, I got drunk.',
      src: allSetSrc,
    },
    {
      zh: '他没好好复习，结果没通过考试。',
      en: "He didn't review well. As a result, he didn't pass the exam.",
      src: allSetSrc,
    },
    {
      zh: '他经常麻烦别人，可是从来不帮朋友，结果一个朋友也没有。',
      en:
        "He often gives other people trouble, but he never helps his friends. As a result, he doesn't have any friends.",
      src: allSetSrc,
    },
  ],
};
