const speakers = [
  {
    image: 'image1',
    name: 'Ashley J. Blackman',
    title: 'Professor of Entrepreneurial Legal Studies at Harvard Law School',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },

  {
    image: 'image2',
    name: 'Laurie A. Johnson',
    title: 'Art Lover',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },

  {
    image: 'image3',
    name: 'Helen J. Obrien',
    title: 'Musicales Artist',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },

  {
    image: 'image4',
    name: 'George Hernandez',
    title: 'President of Young Pirates, Europe',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },

  {
    image: 'image5',
    name: 'Brad McAvoy',
    title: 'Director of Art Center, Nabi',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },

  {
    image: 'image6',
    name: 'Yolanda Lee',
    title: 'Executive Director at Wikimedia Foundation',
    brief: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const imagePath = '../images/';
const extension = '.png';

const speakersDiv = document.querySelector('.speakers');

/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < speakers.length; i++) {
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  speakersDiv.appendChild(speaker);

  const speakerBackground = document.createElement('div');
  speakerBackground.className = 'speaker-background';
  speaker.appendChild(speakerBackground);

  const speakerContent = document.createElement('div');
  speakerContent.className = 'speaker-content';
  speaker.appendChild(speakerContent);

  const speakerImage = document.createElement('div');
  speakerImage.className = 'speaker-image';
  speakerContent.appendChild(speakerImage);

  const imgSpeaker = document.createElement('img');
  speakerImage.appendChild(imgSpeaker);
  imgSpeaker.src = imagePath + speakers[i].image + extension;

  const speakerDetails = document.createElement('div');
  speakerDetails.className = 'speaker-details';
  speakerContent.appendChild(speakerDetails);

  const speakerName = document.createElement('h4');
  speakerDetails.appendChild(speakerName);
  speakerName.innerText = speakers[i].name;

  const speakerTitle = document.createElement('h5');
  speakerDetails.appendChild(speakerTitle);
  speakerTitle.innerText = speakers[i].title;

  const speakerLine = document.createElement('div');
  speakerDetails.appendChild(speakerLine);

  const speakerBrief = document.createElement('p');
  speakerDetails.appendChild(speakerBrief);
  speakerBrief.innerText = speakers[i].brief;
}