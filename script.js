$(document).ready(function () {
	var scrollLink = $(".scroll");

	// Smooth scrolling
	scrollLink.click(function (e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(this.hash).offset().top
			},
			1000
		);
	});

	// Active link switching
	$(window).scroll(function () {
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 20;

			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass("active");
				$(this).parent().siblings().removeClass("active");
			}
		});
	});
});

// define bullshit
const authority = [
	"Profit hungry fudster of ",
	"Famous shitcoin prince from",
	"Big whales from",
	"Well-known firm from",
	"Central Bank of",
	"Hedge fund from",
	"Financial authority of",
	"Suhm-ting Wong the CEO of",
	"Investment bank of"
];

const country = [
	"DeFi Haulers Facebook Group",
	"Mumbai DeFi Haulers Headquarters",
	"Guantanamo Bay",
	"Jamaica",
	"Nauru based Hauler's player data servers",
	"Uzbekistan broom closet",
	"DeFi Haulers Dominican Division",
	"Skid Row's Discord Server",
	"Tajikistan",
	"DeFi Haulers"
];

const action = [
	"approves",
	"regulates",
	"introduces",
	"announced",
	"lobbying for",
	"creating",
	"endorses",
	"co-rugs",
	"just joining",
	"now backing",
	"has initiated"
];

const hype = [
	"procedurally liked",
	"DeFi shining star",
	"a real winner",
	"future classic",
	"*Sun Zhu liked*",
	"ray traced",
	"real-time",
	"revolutionary",
	"VR idle gaming",
	"Coinbase MIM listing",
	"a transformative idea among"
];

const bullshit = [
	"gaming-backed",
	"decentralized",
	"transparent",
	"ERC-721",
	"SaaS",
	"IoT-focused",
	"AI-based",
	"Web4",
	"fiat-backed",
	"quantum resistant"
];

const application = [
	"Gas Fee lender",
	"dApp platform",
	"hyperledger",
	"furry art market",
	"ETH/Haulers hard fork",
	"mandatory cryptoasset",
	"pre-ICO bonus token",
	"22% airdrop",
	"prediction market",
	"euphoria-backed loan",
	"100% in-game footage"
];

var get_random = function (max) {
	return Math.floor(Math.random() * Math.floor(max));
};

var get_hyped = function () {
	var r = [];

	for (var x = 0; x < 6; x++) {
		r.push(get_random(4096));
	}

	return (
		authority[r[0] % authority.length] +
		" " +
		country[r[1] % country.length] +
		" " +
		action[r[2] % action.length] +
		" " +
		hype[r[3] % hype.length] +
		" " +
		bullshit[r[4] % bullshit.length] +
		" " +
		application[r[5] % application.length]
	);
};

var banner = $("#hypebox");
var button = $("button");

button.on("click", function () {
	banner.text(get_hyped());
});

banner.text(get_hyped());

$(window).resize(function () {
	var h = $(window).height();
	$(".block").css("height", h);
});
$(window).resize();

$(window).on("scroll", function () {
	clearTimeout($.data(this, "timer"));
	$.data(
		this,
		"timer",
		setTimeout(function () {
			$("html, body").animate(
				{
					scrollTop: $(".block:hover").offset().top
				},
				100
			);
			event.preventDefault();
		}, 400)
	);
});

const ethereumButton = document.querySelector(".enableEthereumButton");
const sendEthButton = document.querySelector(".sendEthButton");

let accounts = [];
let ethereum;

if (typeof window.ethereum !== "undefined") {
	console.log("MetaMask is installed!");
	ethereum = window.ethereum;
}

//Sending Ethereum to an address
sendEthButton.addEventListener("click", () => {
	ethereum
		.request({
			method: "eth_sendTransaction",
			params: [
				{
					from: accounts[0],
					to: "0x2f318C334780961FB129D2a6c30D0763d9a5C970",
					value: "10000000000000"
				}
			]
		})
		.then((txHash) => console.log(txHash))
		.catch((error) => console.error);
});

ethereumButton.addEventListener("click", () => {
	getAccount();
});

async function getAccount() {
	accounts = await ethereum.request({ method: "eth_requestAccounts" });
	console.log("accounts", accounts);

	if (accounts.length >= 1) {
		ethereumButton.innerHTML = accounts[0];
	}
}

$(document).ready(function () {
	var push = false;
	var numCos;
	var numSin;
	$("#push").click(function () {
		push = !push;
		var num = $(".menu ul li").length;
		if (push) {
			var degrees = 225;
			var offset = 160;
			var rads = toRad(degrees);
			var i;
			for (i = 0; i <= num; i++) {
				numCos = Math.cos((rads / num) * i) * offset;
				numSin = Math.sin((rads / num) * i) * offset;
				$(".menu ul li:eq(" + i + ")")
					.css("display", "block")
					.stop()
					.delay(i * 100)
					.animate({ opacity: 1, left: numCos, top: numSin }, 200);
			}
			$(this).addClass("active");
		} else {
			$(".menu ul li").animate({ opacity: 0, left: 0, top: 0 }, 200, function () {
				$(this).css("display", "none");
				$("#push").removeClass("active");
			});
		}
		return false;
	});
});
function toRad(deg) {
	return (deg * Math.PI) / 180;
}

const countEl = document.getElementById("count");

updateVisitCount();

function updateVisitCount() {
	fetch("https://api.countapi.xyz/update/sendicecream/codepen/?amount=1")
		.then((res) => res.json())
		.then((res) => {
			countEl.innerHTML = res.value;
		});
}

const serverUrl = "https://afkp2aajalfu.usemoralis.com:2053/server";
const appId = "qyVs8XNvweG7INm0RPrjKsdZPStSpTGm3ODvQFpl";
Moralis.start({ serverUrl, appId });

async function login() {
	try {
		let currentUser = Moralis.User.current();
		if (!currentUser) {
			if (typeof screen.orientation === "undefined") {
				// await Moralis.authenticate({ provider: "walletconnect" })

				const user = await Moralis.authenticate({
					provider: "walletconnect",
					signingMessage: "Hello Driver",
					mobileLinks: [
						"rainbow",
						"metamask",
						"argent",
						"trust",
						"imtoken",
						"pillar"
					]
				});
			} else {
				currentUser = await Moralis.authenticate();
			}
			checkUser();
		}
	} catch (error) {
		console.log(error);
	}
}

logout = async () => {
	alert("log out clicked");
	await Moralis.User.logOut();
	checkUser();
};

function checkUser() {
	currentUser = Moralis.User.current();
	if (currentUser) {
		document.getElementById("login_button").style.display = "none";
		document.getElementById("logout_button").style.display = "block";
		document.getElementById("content").style.display = "block";
	} else {
		document.getElementById("login_button").style.display = "block";
		document.getElementById("logout_button").style.display = "none";
		document.getElementById("content").style.display = "none";
	}
}

document.getElementById("login_button").onclick = login;
document.getElementById("logout_button").onclick = logout;
checkUser();

document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "hidden") {
		window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
	}
});
