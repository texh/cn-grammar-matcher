/* --- AUTOGENERATED FILE -----------------------------
* If you make changes to this file delete this comment.
* Otherwise the file may be overwritten in the future.
* --------------------------------------------------- */

const { mergeLocMatchGroups } = require('../lib/matching/utils');
const { regexMatchLocs } = require('../lib/matching/regexMatch');

const allSetSrc = {
  type: 'website',
  url: 'https://resources.allsetlearning.com/chinese/grammar/ASGQ1KOY',
  name: 'AllSet Chinese Grammar Wiki',
};

module.exports = {
  id: 'gangcai',
  structures: ['刚才 + Verb'],
  description:
    'In order to say that something "just now" occurred, use the time noun 刚才 (gāngcái). It can be placed in front of the verb or the subject of a statement.',
  sources: [allSetSrc],
  match: sentence => mergeLocMatchGroups([regexMatchLocs(sentence.text, /(刚才)/)]),
  examples: [
    {
      zh: '你刚才说什么了？',
      en: 'What did you just say?',
      src: allSetSrc,
    },
    {
      zh: '刚才谁来了？',
      en: 'Who came just now?',
      src: allSetSrc,
    },
    {
      zh: '刚才你去哪儿了？',
      en: 'Where did you go just now?',
      src: allSetSrc,
    },
    {
      zh: '刚才我去洗手间了。',
      en: 'I just went to the restroom.',
      src: allSetSrc,
    },
    {
      zh: '老板刚才生气了。',
      en: 'The boss just got angry.',
      src: allSetSrc,
    },
    {
      zh: '你们刚才在看什么？',
      en: 'What were you looking at just now?',
      src: allSetSrc,
    },
    {
      zh: '不好意思，我刚才出去了。',
      en: "I'm sorry, I just now stepped out.",
      src: allSetSrc,
    },
    {
      zh: '宝宝刚才哭了。',
      en: 'The baby just cried.',
      src: allSetSrc,
    },
    {
      zh: '他们刚才去开会了。',
      en: 'They just went to a meeting.',
      src: allSetSrc,
    },
    {
      zh: '刚才有人找你。',
      en: 'Just now, there was someone looking for you.',
      src: allSetSrc,
    },
  ],
};
