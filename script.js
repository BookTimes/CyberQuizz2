const sub = document.getElementById("subm");
var cont = document.getElementById("let").innerText;
var q = 0;
const qnLog = [];
const anLog = [2, 0, 1, 1, 3, 0, 3, 2, 0, 1, 3, 0, 2, 1, 1, 2, 2, 3, 1, 0];
var h = true;
// http://jsonblob.com/1197622298986536960
var nam;
var clss;
var sec;
var dat;
var got;
var mark = 0;
sub.addEventListener("click", function () {
  nam = document.getElementById("nam_box").value;
  clss = document.getElementById("class").value;
  sec = document.getElementById("sec").value;
  document.getElementById("nam").innerText = nam;
  document.getElementById("clss").innerText = clss + " " + sec;
  if (clss != "" && sec != "" && nam != "") {
    document.getElementById("let").innerHTML = instruct;
    document.getElementById("proceed").addEventListener("click", function () {
      document.getElementById("let").innerHTML = "";
      askQn(i);
    });
  } else {
    alert("Check Credentials");
  }
});
const instruct = `
<div class="py-3 fw-bold d-flex flex-column">
  <h1 class="fw-bolder">Instructions</h1>
  <ul class="fs-4">
      <li>Make sure you have registered in your own name and class</li>
      <li>Select your answers properly as there will be negative marking , 4 marks awarded to correct answers and 1 mark deducted for wrong answers</li>
      <li>The total duration of the exam will be 30 minutes</li>
      <li>You will be disqualified if another window is opened on the device which will be automatically detected by the software</li>
    </ul> 
</div>
<div class="d-flex  flex-column justify-content-center">
  <button id='proceed' class="p-3 ">Proceed</button>

</div>
`;
var i = 0;

const askQn = function (i) {
  const qns = [
    {
      qn: "A hardware device/software program that filters all the packets of data that comes through a network, the internet, etc. is called:",
      options: ["Cookies", "Antivirus", "Firewall", "Protocol"],
    },
    {
      qn: "Internet and WWW (World Wide Web) are considered the same. Choose Suitable Option for Given Statement",
      options: ["True", "False", "Partially True & False", "None"],
    },
    {
      qn: "What is Netiquette?",
      options: [
        "Treat Others as badly as They Treat You",
        "Be Polite Online & Others will do the Same",
        "Etiquette for Netflix",
        "None of the Above",
      ],
    },
    {
      qn: "Which of the following typically keeps tabs on every online activity the victim engages in, compiles all the data in the background, and sends it to a third party?",
      options: ["Cookies", "Spyware", "Adware", "All of the Above"],
    },
    {
      qn: "What tasks can a Computer perform?",
      options: [
        "Type Documents & send Emails",
        "Internet Browsing",
        "Store & Retrieve Info",
        "All of the Above",
      ],
    },
    {
      qn: '"Data encryption is used to ensure confidentiality" Choose Suitable Option for Given Statement:',
      options: ["True", "False", "None", "Partially True & False"],
    },
    {
      qn: "Which of the following are Programming Languages?",
      options: ["Python", "C++", "Java", "All of the Above"],
    },
    {
      qn: "Which of these is something you should do if you are cyber bullied?",
      options: [
        "Don't Open/Read their Messages",
        "Tell your Internet Service Provider",
        "Tell a Trusted Adult about it",
        "Keep it to yourself",
      ],
    },
    {
      qn: "HTTPS is a Protocol that means:",
      options: [
        "HyperText Transfer Protocol Secure",
        "HyperTransfer Text Protocol Safety",
        "HastyText Traversal Protocol Secure",
        "None of the Above",
      ],
    },
    {
      qn: "In the World of CyberSecurity, What is CIA?",
      options: [
        "Commercial Investment Authority",
        "Confidentiality, Integrity, and Availability",
        "Central Investigative Authority",
        "None of the Above",
      ],
    },
    {
      qn: "Copying of a web-page or website & storing that copy for the purpose of speeding up subsequent access is called:",
      options: ["Downloading", "Browsing", "File Swapping", "Caching"],
    },
    {
      qn: "In which Year was the Information Technology Act passed?",
      options: ["2000", "1978", "2021", "2015"],
    },
    {
      qn: "Cybercrime is criminal activity that targets/uses a computer, a computer network or a networked device & which doesn't include:",
      options: ["Phishing", "Privacy Violation", "Bank Theft", "Data Breach"],
    },
    {
      qn: "From the Given Statements, Which of the following IS not TRUE about HTTP?",
      options: [
        "URL Scheme Begins with 'http://'",
        "Data is Encrypted before transmission",
        "Prone to Eavesdropping & Data interception",
        "Data is sent in Plain Text",
      ],
    },
    {
      qn: "From the Passwords listed below, which is the Strongest?",
      options: ["!798$", "Aw12q3", "@1A5p$#2", "All of the Above"],
    },
    {
      qn: "A VPN establishes a Digital Connection between the Computer & a Remote Server owned by the VPN Provider. What does VPN stand for?",
      options: [
        "Vast Private Network",
        "Virtual Public Network",
        "Virtual Private Network",
        "Void Public Net",
      ],
    },
    {
      qn: "Which of the following is a Type of Cyber Security?",
      options: [
        "Application Security",
        "Cloud Security",
        "Network Security",
        "All of the Above",
      ],
    },
    {
      qn: "A Black Hat Hacker Maliciously uses Hacking skills to breach confidential data. A White Hat Hacker performs Ethical Hacking for Common Good. Then, Which of these statements about a Grey Hat Hacker is False?",
      options: [
        "Their Behaviour is Unpredictable",
        "Can use their skills for Common Good",
        "Might become a Potential Threat at any time",
        "No Similarity with Black Hat & White Hat Hackers",
      ],
    },
    {
      qn: "Which of the following is known as Malicious software?",
      options: ["Illegal Ware", "Badware", "Malware", "Malicious Ware"],
    },
    {
      qn: "Yahoo.inc Vs Akash Arora is a Famous Case relating to Which of the following?",
      options: [
        "Cyber Squatting",
        "Cyber Stalking",
        "Cyber Defamation",
        "None of the Above",
      ],
    },
  ];

  // expectedLevelShufflingPncOnly(qns, anLog);
  var w = 0;
  document.getElementById("let").innerHTML = ` <div class="row ">
    <div class="col-8">
        <h1 class="">Question ${i + 1} :</h1>
        <hr style="border-top: 3px solid black">
        <p class="fs-4">${qns[i].qn}</p>

       
       <ol class = 'control'>
       
        <li><input class='op' type="radio" name="y"><span> ${
          qns[i].options[0]
        }</span></li>
        <li><input type="radio" class='op' name="y"><span> ${
          qns[i].options[1]
        }</span></li><li><input type="radio" class='op' name="y"><span> ${
    qns[i].options[2]
  }</span></li><li><input type="radio" class='op' name="y"><span> ${
    qns[i].options[3]
  }</span></li>
       </ol>
    </div>
    <div class="col-4  pt-4">
        <button class="qns">1</button>
<button class="qns ">2</button>
<button class="qns">3</button>
<button class="qns">4</button>
<button class="qns">5</button>
<button class="qns">6</button>
<button class="qns">7</button>
<button class="qns">8</button>
<button class="qns">9</button>
<button class="qns">10</button>
<button class="qns">11</button>
<button class="qns">12</button>
<button class="qns">13</button>
<button class="qns">14</button>
<button class="qns">15</button>
<button class="qns">16</button>
<button class="qns">17</button>
<button class="qns">18</button>
<button class="qns">19</button>
<button class="qns">20</button>

    </div>

    <div class="px-3  justify-content-between d-flex gap-4 ">
    <buton id='next' class="  btn btn-success  p-3">Next Question</buton>
      <button onclick='endExam()' id='end' class="  btn btn-danger p-3">END EXAM AND SUBMIT</button></div>
</div>`;
  var elements = document.querySelectorAll(".op");
  var cursel = -1;
  document.getElementsByClassName("qns")[i].classList.add("ans");
  // Add click event listener to each element
  elements.forEach(function (element, e) {
    element.addEventListener("click", function () {
      cursel = e;
    });
  });
  // var qnsButtons = document.querySelectorAll(".qns");

  // // Add a click event listener to each button
  // qnsButtons.forEach(function (button) {
  //   button.addEventListener("click", function () {
  //     // Display the inner text of the clicked button using alert
  //     askQn(Number(button.innerText) - 1);
  //   });
  // });

  if (i < 20) {
    i += 1;

    document.getElementById("next").addEventListener("click", function () {
      qnLog.push(cursel);
      if (i < 20) {
        askQn(i);
      }
      if (i == 20) {
        endExam();
      }
    });
  }
};
document.getElementsByTagName("html")[0].addEventListener("mouseleave", () => {
  const j = setInterval(() => {
    q += 1;
    console.log(q);
    if (q == 5) {
      document.getElementsByClassName("overlay")[0].innerHTML =
        "<h1>Disqualified</h1>";
      h = false;
      document.getElementById("let").innerHTML = "";
    }
  }, 1000);
  document.getElementsByClassName("hid")[0].classList.remove("hid");
  document
    .getElementsByTagName("html")[0]
    .addEventListener("mouseenter", () => {
      if (h == true) {
        document.getElementsByClassName("overlay")[0].classList.add("hid");
      }

      q = 0;
      clearInterval(j);
    });
});

const dataSend = function () {
  var mks = "";
  qnLog.forEach((e, i) => {
    if (anLog[i] == e) {
      mks = String(Number(mks) + 1);
    }
    console.log(anLog[i], e);
  });
  dat = { user: nam, grade: clss + sec, mrk: mks };
  get();

  setTimeout(() => {
    got.push(dat);
    out();
  }, 2000);
};
const dc = function () {
  if (dat in got) {
    console.log("yay");
  }
};
const get = function () {
  // Specify the URL of the API you want to fetch data from
  const url = "https://jsonblob.com/api/1197622298986536960";
  // Use the fetch API to make the request
  fetch(url)
    .then((response) => {
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Do something with the data
      got = data;
    })
    .catch((error) => {
      // Handle errors here
      console.error("Fetch error:", error);
    });
};
const out = function () {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Specify the URL of the API endpoint you want to update
  var url = "https://jsonblob.com/api/1197622298986536960"; // Example URL, replace with your API endpoint

  // Data to be updated (replace with your actual data)

  // Convert the data to a JSON string
  var jsonData = JSON.stringify(got);

  // Set up the PUT request
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // Define a function to handle the response when it is received
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      // Check if the request is complete
      if (xhr.status == 200) {
        // Check if the request was successful
        // Parse the JSON response (if needed)
        var responseData = JSON.parse(xhr.responseText);
        console.log("Data updated successfully:", responseData);
        document.getElementById(
          "let"
        ).innerHTML = `<div class="d-flex  flex-column justify-content-center align-items-center"> <h1 class="display-3 fw-bold">Exam Submitting</h1>
        <h3>You May Now leave the page</h3>
        <div class=" fw-bold fs-1">Done</div>`;
      } else {
        // Handle errors here
      }
    }
  };

  // Send the PUT request with the JSON data
  xhr.send(jsonData);
};
const endExam = function () {
  dataSend();
  document.getElementById(
    "let"
  ).innerHTML = `<div class="d-flex  flex-column justify-content-center align-items-center"> <h1 class="display-3 fw-bold">Exam Submitting</h1>
  <h3>Don't leave the page until confirmation arrives</h3>
  <div class=" fw-bold fs-1">Wait...</div>`;
  get();
};

const j = setInterval(() => {
  var endTime = new Date("2024-01-23T16:40:00");

  var currentTime = new Date();

  var timeDifference = endTime - currentTime;

  var secondsDifference = Math.floor(timeDifference / 1000);

  var minutes = Math.floor(secondsDifference / 60);
  var seconds = secondsDifference % 60;
  if (minutes > 0 || seconds > 0) {
    document.getElementById("time").innerText = minutes + ":" + seconds;
    if (minutes < 5) {
      document.getElementById("time").style.color = "red";
    }
  } else if (minutes == 0 && seconds == 0) {
    endExam();
    clearInterval(j);
  }
}, 1000);

//algorithm not upto level borderline errors there you please dont use it unless its an emergency
function expectedLevelShufflingPncOnly(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }

  // Generate a random permutation of indices
  const permutation = Array.from(
    { length: arr1.length },
    (_, index) => index
  ).sort(() => Math.random() - 0.5);

  // Apply the same permutation to both arrays
  const shuffledArr1 = permutation.map((index) => arr1[index]);
  const shuffledArr2 = permutation.map((index) => arr2[index]);

  // Update the original arrays with the shuffled values
  arr1.length = 0;
  arr2.length = 0;
  arr1.push(...shuffledArr1);
  arr2.push(...shuffledArr2);
}
