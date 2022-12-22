var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

function stringifyNumber(n) {
  if (n < 20) return special[n];
  if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
  return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]): '';
    return str.endsWith('-') ? str.slice(0, -1) : str;
}

today =  new Date();
y = today.getFullYear();
m = today.getMonth() + 1;
d = today.getDate();
document.getElementById("date").innerHTML = 'And lo, on this day, being the ' + stringifyNumber(d) + " day of the " + stringifyNumber(m) + " month<br></br>of the " + stringifyNumber(y - 2000) + " year since the dawning of the new millennium,<br></br>'tis a mere";

countDownDate = new Date("Mar 1, 2023 00:00:01").getTime();

// Find the distance between now and the count down date
var distance = countDownDate - today.getTime();

// Time calculations for days, hours, minutes and seconds
var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

document.getElementById("timeToWait").innerHTML = inWords(days)

document.getElementById("moonrises").innerHTML = "moonrise" + (days == 1 ? "" : "s") + " more 'til the blessed morn of that most hallowed of days...<br></br>"

let showWithTodaysFairy = showScrollTextAndFairy.bind(null, (today.getDay() + 1) % 7 + 1);
if (d == new Date("Dec 25, 2023").getDate()) {
  window.onload = showWithTodaysFairy;
}
else{
  window.onload = onPageLoadChristmas;
}

function showScrollTextAndFairy(fairyIndex) {
  let fairy =  document.getElementById("fairy");
  fairy.classList.add('fairy' + fairyIndex);
  fairy.classList.remove("hidden-on-load");
  fairy.classList.toggle("fade");
  document.getElementById("scrollText").classList.toggle("fade");
}

function onPageLoadChristmas() {
  let sparkles = document.getElementById("sparkles");
  let storyText = document.getElementById("storyText");
  let fairies = document.getElementById("fairies");
  let actionText = document.getElementById("actionText");
  let scrollText = document.getElementById("scrollText");
  let sonnetText1 = document.getElementById("sonnetText1");
  let sonnetText2 = document.getElementById("sonnetText2");
  let sonnetText3 = document.getElementById("sonnetText3");
  let sonnetText4 = document.getElementById("sonnetText4");
  let sonnetText5 = document.getElementById("sonnetText5");
  let sonnetText6 = document.getElementById("sonnetText6");
  let sonnetText7 = document.getElementById("sonnetText7");
  let sonnetText9 = document.getElementById("sonnetText8");
  let nextSonnetText = document.getElementById("nextSonnetText");

  scrollText.classList.toggle("fade");
  storyText.classList.toggle("fade");
  sparkles.classList.remove('hidden-on-load');

  sparkles.onclick = animationStepOne;
}

// FAIRY STORY

let fadeDurationMs = 500;
let bjorkFadeDuration = 1632;

var sparklesClicked = false;
function animationStepOne() {
  if (sparklesClicked) {
    return;
  }
  sparklesClicked = true;
  sparkles.classList.toggle('fade');
  storyText.classList.toggle('fade');
  setTimeout( animationStepTwo, fadeDurationMs );
}

function animationStepTwo() {
  sparkles.classList.add('hidden-on-load')
  storyText.innerHTML = "All seven fairies of the week appear before you, materialising<br></br>\
                         out of a shimmering patch in the air. They begin to talk - it's<br></br>\
                         hard to tell which one is speaking, as their language is less<br></br>\
                         words than twinkling music, a magical sound that is both<br></br>\
                         heard and <i>felt</i> in your heart.";
  actionText.innerHTML = "[listen to what the fairies have to say]";

  storyText.classList.toggle("fairiesVisible");
  storyText.classList.toggle('fade');
  fairies.classList.toggle("fade");
  actionText.classList.toggle("fade");
  actionText.onclick = transition.bind(null, animationStepThree);
}

function animationStepThree() {
  storyText.innerHTML = "\"We're ever so sorry for our tardiness, my lady!\" say the fairies.<br></br>\
                           We have been flying as fast as we could to get here in time! Only we<br></br>\
                           have been tasked with delivering a new magic scroll, and it's ever<br></br>\
                           so confusing... It's addressed to seven different people and we don't<br></br>\
                           know what to do!\"";
  actionText.innerHTML = "[ask if you can help the fairies]";

  storyText.classList.toggle('fade');
  actionText.classList.toggle("fade");
  actionText.onclick = transition.bind(null, animationStepFour);
}

function animationStepFour() {
  storyText.innerHTML = "\"Oh that would be wonderful!\" say the fairies. \"The scroll is<br></br>\
                           addressed to The Nymph, The Nightingale, The Naiad, The Pearl,<br></br>\
                           The Dream, Lady Lili of the Western Woods, and Indi. But how are<br></br>\
                           we to deliver one scroll to all of those people?\"";
  actionText.innerHTML = "[\"Worry not, good fairies, for all of those people are me!\"]";

  storyText.classList.toggle('fade');
  actionText.classList.toggle("fade");
  actionText.onclick = transition.bind(null, animationStepFive);
}

function animationStepFive() {
  storyText.innerHTML = "\"Really? Truly? This is splendid news!\" say the fairies. \"This<br></br>\
                           means that our long journey is over. But you must be an extremely<br></br>\
                           magnificent person, to possess so many titles!\" The fairies look<br></br>\
                           at you in admiration. After a moment, they collect themselves and<br></br>\
                           proffer a slightly glowing scroll to you. \"Your delivery, my lady!\""
  actionText.innerHTML = "[take the magic scroll from the fairies]";

  storyText.classList.toggle('fade');
  actionText.classList.toggle("fade");
  actionText.onclick = transition.bind(null, animationStepSix);
}

function animationStepSix() {
  storyText.innerHTML = "As you take the scroll, the fairies begin play a beautiful song. They<br></br>\
                         produce small, sparkling instruments and start striking them delicately<br></br>\
                         with miniscule mallets. Their twinkling music fills the air with a magical<br></br>\
                         feeling of light, happiness, love, and excitement."
  actionText.innerHTML = "[unroll the scroll and begin to read]";

  storyText.classList.toggle('fade');
  actionText.classList.toggle("fade");
  document.getElementById("frosti").play();
  actionText.onclick = sonnetTransition;
}

var actionTextClicked = false;
function transition(nextFunction) {
  if(!actionTextClicked) {
    actionTextClicked = true;
    storyText.classList.toggle('fade');
    actionText.classList.toggle('fade');
    setTimeout( () => { actionTextClicked = false; nextFunction() }, fadeDurationMs );
  }
}

function sonnetTransition() {
  if(!actionTextClicked) {
    actionTextClicked = true;
    storyText.classList.toggle('fade');
    actionText.classList.toggle('fade');
    scrollText.classList.toggle("fade")

    setTimeout( ()=> { actionText.innerHTML = ""; sonnet1line1(); }, fadeDurationMs );
  }
}

// FIRST SONNET

function sonnet1line1() {
  sonnetText1.innerHTML = "My nymph and I, we dance in forests green<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet1line2, bjorkFadeDuration );
}

function sonnet1line2() {
  sonnetText2.innerHTML = "And, in a private bacchanal, embrace<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet1line3, bjorkFadeDuration );
}

function sonnet1line3() {
  sonnetText3.innerHTML = "Her ecstasy is heightened by the breeze<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet1line4, bjorkFadeDuration );
}

function sonnet1line4() {
  sonnetText4.innerHTML = "Paroxysms of pleasure I can taste!<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet1line5, bjorkFadeDuration );
}

function sonnet1line5() {
  sonnetText5.innerHTML = "Forever shall the emerald and gold<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet1line6, bjorkFadeDuration );
}

function sonnet1line6() {
  sonnetText6.innerHTML = "Of canopies and sun-shafts be engraved<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet1line7, bjorkFadeDuration );
}

function sonnet1line7() {
  sonnetText7.innerHTML = "Upon my memories, and I shall hold<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet1line8, bjorkFadeDuration );
}

function sonnet1line8() {
  sonnetText8.innerHTML = "Them close and in their radiance shall bathe<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet2line1), bjorkFadeDuration );
}

// SECOND SONNET

function sonnet2line1() {
  sonnetText1.innerHTML = "My nightingale and I do love to sing<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet2line2, bjorkFadeDuration );
}

function sonnet2line2() {
  sonnetText2.innerHTML = "To revel in a song’s sweet golden light<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet2line3, bjorkFadeDuration );
}

function sonnet2line3() {
  sonnetText3.innerHTML = "To swoop and soar and dive upon the winds<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet2line4, bjorkFadeDuration );
}

function sonnet2line4() {
  sonnetText4.innerHTML = "Of melody and magic, taking flight<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet2line5, bjorkFadeDuration );
}

function sonnet2line5() {
  sonnetText5.innerHTML = "Forever shall that singing, so sublime<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet2line6, bjorkFadeDuration );
}

function sonnet2line6() {
  sonnetText6.innerHTML = "Those frenzied, fizzing fits of love and song<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet2line7, bjorkFadeDuration );
}

function sonnet2line7() {
  sonnetText7.innerHTML = "Be in my fondest memories enshrined<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet2line8, bjorkFadeDuration );
}

function sonnet2line8() {
  sonnetText8.innerHTML = "To treasure and to hold all my life long<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet3line1), bjorkFadeDuration );
}

// THIRD SONNET

function sonnet3line1() {
  sonnetText1.innerHTML = "My precious pearl, I hold her oh so tight<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet3line2, bjorkFadeDuration );
}

function sonnet3line2() {
  sonnetText2.innerHTML = "Enclosing her within my loving limbs<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet3line3, bjorkFadeDuration );
}

function sonnet3line3() {
  sonnetText3.innerHTML = "Cocooned in blissful bonds we pass the night<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet3line4, bjorkFadeDuration );
}

function sonnet3line4() {
  sonnetText4.innerHTML = "Inhaling the soft scent of lover’s skin<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet3line5, bjorkFadeDuration );
}

function sonnet3line5() {
  sonnetText5.innerHTML = "Her velveteen caress upon my arm<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet3line6, bjorkFadeDuration );
}

function sonnet3line6() {
  sonnetText6.innerHTML = "Her breathing, deep and slow, against my chest<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet3line7, bjorkFadeDuration );
}

function sonnet3line7() {
  sonnetText7.innerHTML = "Forever shall I hold these shining charms<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet3line8, bjorkFadeDuration );
}

function sonnet3line8() {
  sonnetText8.innerHTML = "These miracles with which I have been blessed<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet4line1), bjorkFadeDuration );
}

// FOURTH SONNET

function sonnet4line1() {
  sonnetText1.innerHTML = "My naiad, she and I, we love to swim<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet4line2, bjorkFadeDuration );
}

function sonnet4line2() {
  sonnetText2.innerHTML = "In sapphire seas we frolic ‘mongst the waves<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet4line3, bjorkFadeDuration );
}

function sonnet4line3() {
  sonnetText3.innerHTML = "The dewy droplets twinkle on her skin<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet4line4, bjorkFadeDuration );
}

function sonnet4line4() {
  sonnetText4.innerHTML = "Her beauty brighter than the sunlight’s rays<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet4line5, bjorkFadeDuration );
}

function sonnet4line5() {
  sonnetText5.innerHTML = "Her visage, smiling, sparkling in the dawn<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet4line6, bjorkFadeDuration );
}

function sonnet4line6() {
  sonnetText6.innerHTML = "The shimmering of light upon the sea<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet4line7, bjorkFadeDuration );
}

function sonnet4line7() {
  sonnetText7.innerHTML = "Shall be a gift I guard forevermore<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet4line8, bjorkFadeDuration );
}

function sonnet4line8() {
  sonnetText8.innerHTML = "As perfect as if plucked from fantasy<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet5line1), bjorkFadeDuration );
}

// FIFTH SONNET

function sonnet5line1() {
  sonnetText1.innerHTML = "My dream, she often visits as I sleep<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet5line2, bjorkFadeDuration );
}

function sonnet5line2() {
  sonnetText2.innerHTML = "A star-strewn spirit sent from far away<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet5line3, bjorkFadeDuration );
}

function sonnet5line3() {
  sonnetText3.innerHTML = "I summon her, to kiss in oceans deep<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet5line4, bjorkFadeDuration );
}

function sonnet5line4() {
  sonnetText4.innerHTML = "For there’s no sweeter dream than of her face!<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet5line5, bjorkFadeDuration );
}

function sonnet5line5() {
  sonnetText5.innerHTML = "‘Athaarien fala’riel’ I chant<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet5line6, bjorkFadeDuration );
}

function sonnet5line6() {
  sonnetText6.innerHTML = "Three times before I sleep to bring her forth<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet5line7, bjorkFadeDuration );
}

function sonnet5line7() {
  sonnetText7.innerHTML = "With every dream her astral form enchants<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet5line8, bjorkFadeDuration );
}

function sonnet5line8() {
  sonnetText8.innerHTML = "A hallowed memory forevermore <br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet6line1), bjorkFadeDuration );
}

// SIXTH SONNET

function sonnet6line1() {
  sonnetText1.innerHTML = "My lili - shining jewel - and I do play <br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet6line2, bjorkFadeDuration );
}

function sonnet6line2() {
  sonnetText2.innerHTML = "And prance upon the endless rolling plains<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet6line3, bjorkFadeDuration );
}

function sonnet6line3() {
  sonnetText3.innerHTML = "Of mythos, fables, stories, escapades<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet6line4, bjorkFadeDuration );
}

function sonnet6line4() {
  sonnetText4.innerHTML = "Imaginary canvasses we paint<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet6line5, bjorkFadeDuration );
}

function sonnet6line5() {
  sonnetText5.innerHTML = "This secret world we share shall live and breathe<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet6line6, bjorkFadeDuration );
}

function sonnet6line6() {
  sonnetText6.innerHTML = "Forevermore inside of her and me<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet6line7, bjorkFadeDuration );
}

function sonnet6line7() {
  sonnetText7.innerHTML = "A tapestry of wonders that we weave<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet6line8, bjorkFadeDuration );
}

function sonnet6line8() {
  sonnetText8.innerHTML = "A magic map that charts the Dandi seas<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet7line1), bjorkFadeDuration );
}

// SEVENTH SONNET

function sonnet7line1() {
  sonnetText1.innerHTML = "My indi, she and I could talk for days<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet7line2, bjorkFadeDuration );
}

function sonnet7line2() {
  sonnetText2.innerHTML = "Or longer still if sleephood would allow!<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet7line3, bjorkFadeDuration );
}

function sonnet7line3() {
  sonnetText3.innerHTML = "Traversing twisting tangents, winding ways<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet7line4, bjorkFadeDuration );
}

function sonnet7line4() {
  sonnetText4.innerHTML = "And rhapsodising raptly hour on hour<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet7line5, bjorkFadeDuration );
}

function sonnet7line5() {
  sonnetText5.innerHTML = "The words we’ve shared, in bed before we sleep<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet7line6, bjorkFadeDuration );
}

function sonnet7line6() {
  sonnetText6.innerHTML = "On wardrobe floors, on calls, on nighttime drives<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet7line7, bjorkFadeDuration );
}

function sonnet7line7() {
  sonnetText7.innerHTML = "Each one is now a precious memory<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet7line8, bjorkFadeDuration );
}

function sonnet7line8() {
  sonnetText8.innerHTML = "That we shall carry with us all our lives<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( sonnetNext.bind( null, sonnet8line1), bjorkFadeDuration );
}

// EIGHTH SONNET

function sonnet8line1() {
  sonnetText1.innerHTML = "And though the distance ‘twixt us now is vast<br></br>";
  sonnetText1.classList.toggle("fade");
  setTimeout( sonnet8line2, bjorkFadeDuration );
}

function sonnet8line2() {
  sonnetText2.innerHTML = "And cruelly we’re divided on this day<br></br>";
  sonnetText2.classList.toggle("fade");
  setTimeout( sonnet8line3, bjorkFadeDuration );
}

function sonnet8line3() {
  sonnetText3.innerHTML = "I do believe this Christmas is the last<br></br>";
  sonnetText3.classList.toggle("fade");
  setTimeout( sonnet8line4, bjorkFadeDuration );
}

function sonnet8line4() {
  sonnetText4.innerHTML = "That we shall spend with oceans in the way<br></br>";
  sonnetText4.classList.toggle("fade");
  setTimeout( sonnet8line5, bjorkFadeDuration );
}

function sonnet8line5() {
  sonnetText5.innerHTML = "And though my mind already feels so filled<br></br>";
  sonnetText5.classList.toggle("fade");
  setTimeout( sonnet8line6, bjorkFadeDuration );
}

function sonnet8line6() {
  sonnetText6.innerHTML = "With memories so vivid, sweet, and bright<br></br>";
  sonnetText6.classList.toggle("fade");
  setTimeout( sonnet8line7, bjorkFadeDuration );
}

function sonnet8line7() {
  sonnetText7.innerHTML = "I know that there are untold wonders still<br></br>";
  sonnetText7.classList.toggle("fade");
  setTimeout( sonnet8line8, bjorkFadeDuration );
}

function sonnet8line8() {
  sonnetText8.innerHTML = "We have in store a lifetime of delights!<br></br>";
  sonnetText8.classList.toggle("fade");
  setTimeout( finishReading, bjorkFadeDuration );
}

function finishReading() {
  nextSonnetText.innerHTML = "[finish reading]";
  nextSonnetText.classList.toggle("fade");
  nextSonnetText.onclick = endAnimation;
}

function endAnimation() {
  storyText.innerHTML = "The fairies all smile at you as you finish reading the scrolls. \"We hope<br></br>\
                         that you enjoyed our fairy song while you read!\" they say. \"We have one<br></br>\
                         final message to pass on from the sender of the scrolls...\"<br></br>\
                         \"<i>Merry Christmas!</i>\""
  actionText.innerHTML = "[return to the Dandimas calendar]";

  actionTextClicked = false;
  actionText.onclick = () => {
      if(!actionTextClicked) {
        actionTextClicked = true;
        fairies.classList.toggle("fade");
        sonnetText1.innerHTML = "";
        sonnetText2.innerHTML = "";
        sonnetText3.innerHTML = "";
        sonnetText4.innerHTML = "";
        sonnetText5.innerHTML = "";
        sonnetText6.innerHTML = "";
        sonnetText7.innerHTML = "";
        sonnetText8.innerHTML = "";
        nextSonnetText.innerHTML = "";
        storyText.classList.toggle("fade");
        actionText.classList.toggle("fade");
        showWithTodaysFairy();
    }
  } 
  sonnetText1.classList.toggle("fade");
  sonnetText2.classList.toggle("fade");
  sonnetText3.classList.toggle("fade");
  sonnetText4.classList.toggle("fade");
  sonnetText5.classList.toggle("fade");
  sonnetText6.classList.toggle("fade");
  sonnetText7.classList.toggle("fade");
  sonnetText8.classList.toggle("fade");
  nextSonnetText.classList.toggle("fade");
  storyText.classList.toggle('fade');
  actionText.classList.toggle("fade");
  getSoundAndFadeAudio("frosti");
}

var allowNextPress = false;
function sonnetNext( nextFunction ) {
  allowNextPress = true;
  nextSonnetText.innerHTML = "[next sonnet]";
  nextSonnetText.classList.toggle("fade");
  nextSonnetText.onclick = () => {
    if (allowNextPress) {
      allowNextPress = false;
      sonnetText1.classList.toggle("fade");
      sonnetText2.classList.toggle("fade");
      sonnetText3.classList.toggle("fade");
      sonnetText4.classList.toggle("fade");
      sonnetText5.classList.toggle("fade");
      sonnetText6.classList.toggle("fade");
      sonnetText7.classList.toggle("fade");
      sonnetText8.classList.toggle("fade");
      nextSonnetText.classList.toggle("fade");
      setTimeout( nextFunction, bjorkFadeDuration );
    }
  }
}

function getSoundAndFadeAudio (audiosnippetId) {

  var sound = document.getElementById(audiosnippetId);
  var fadeAudio = setInterval(function () {

      // Only fade if past the fade out point or not at zero already
      if (sound.volume > 0.0) {
          sound.volume -= 0.1;
      }
      // When volume at zero stop all the intervalling
      if (sound.volume <= 0.0) {
          clearInterval(fadeAudio);
          sound.pause();
      }
  }, 500);
}