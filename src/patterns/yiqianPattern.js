/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGVCWLU',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'yiqian',
  structures: ['以前 + Subj. + Verb + Obj.', 'Subj. + 以前 + Verb + Obj.'],
  description:
    'To talk about things that previously occurred, you can use the word 以前 (yǐqián). You can use this structure to talk about actions that happened at some unspecified time in the past.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(以前)/)]),
  examples: [
    {
      zh: '以前我不会说中文。',
      en: 'Before, I could not speak Chinese.',
      src: allSetSrc,
    },
    {
      zh: '你以前住在哪儿？',
      en: 'Before, where did you live?',
      src: allSetSrc,
    },
    {
      zh: '以前我不认识他。',
      en: "Before, I didn't know him.",
      src: allSetSrc,
    },
    {
      zh: '以前他是我们的客户吗？',
      en: 'Was he our client before?',
      src: allSetSrc,
    },
    {
      zh: '以前他是一个服务员，现在是老板。',
      en: 'Before, he was a waiter. Now, he is a boss.',
      src: allSetSrc,
    },
    {
      zh: '我父母以前都是老师。',
      en: 'Before, both of my parents were teachers.',
      src: allSetSrc,
    },
    {
      zh: '爸爸以前很喜欢抽烟。',
      en: 'Before, dad really liked smoking.',
      src: allSetSrc,
    },
    {
      zh: '姐姐以前有一个很有钱的男朋友。',
      en: 'My older sister had a very rich boyfriend before.',
      src: allSetSrc,
    },
    {
      zh: '他们以前没有钱，可是很快乐。',
      en: "They didn't have much money before, but they were happy.",
      src: allSetSrc,
    },
    {
      zh: '我男朋友以前在美国工作，现在在中国工作。',
      en: 'Before, my boyfriend worked in the USA. Now, he works in China.',
      src: allSetSrc,
    },
  ],
};
