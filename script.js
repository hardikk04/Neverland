function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function canvas() {
  const canvas = document.querySelector(".page1>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./Canva/0001.webp
    ./Canva/0002.webp
    ./Canva/0003.webp
    ./Canva/0004.webp
    ./Canva/0005.webp
    ./Canva/0006.webp
    ./Canva/0007.webp
    ./Canva/0008.webp
    ./Canva/0009.webp
    ./Canva/0010.webp
    ./Canva/0011.webp
    ./Canva/0012.webp
    ./Canva/0013.webp
    ./Canva/0014.webp
    ./Canva/0015.webp
    ./Canva/0016.webp
    ./Canva/0017.webp
    ./Canva/0018.webp
    ./Canva/0019.webp
    ./Canva/0020.webp
    ./Canva/0021.webp
    ./Canva/0022.webp
    ./Canva/0023.webp
    ./Canva/0024.webp
    ./Canva/0025.webp
    ./Canva/0026.webp
    ./Canva/0027.webp
    ./Canva/0028.webp
    ./Canva/0029.webp
    ./Canva/0030.webp
    ./Canva/0031.webp
    ./Canva/0032.webp
    ./Canva/0033.webp
    ./Canva/0034.webp
    ./Canva/0035.webp
    ./Canva/0036.webp
    ./Canva/0037.webp
    ./Canva/0038.webp
    ./Canva/0039.webp
    ./Canva/0040.webp
    ./Canva/0041.webp
    ./Canva/0042.webp
    ./Canva/0043.webp
    ./Canva/0044.webp
    ./Canva/0045.webp
    ./Canva/0046.webp
    ./Canva/0047.webp
    ./Canva/0048.webp
    ./Canva/0049.webp
    ./Canva/0050.webp
    ./Canva/0051.webp
    ./Canva/0052.webp
    ./Canva/0053.webp
    ./Canva/0054.webp
    ./Canva/0055.webp
    ./Canva/0056.webp
    ./Canva/0057.webp
    ./Canva/0058.webp
    ./Canva/0059.webp
    ./Canva/0060.webp
    ./Canva/0061.webp
    ./Canva/0062.webp
    ./Canva/0063.webp
    ./Canva/0064.webp
    ./Canva/0065.webp
    ./Canva/0066.webp
    ./Canva/0067.webp
    ./Canva/0068.webp
    ./Canva/0069.webp
    ./Canva/0070.webp
    ./Canva/0071.webp
    ./Canva/0072.webp
    ./Canva/0073.webp
    ./Canva/0074.webp
    ./Canva/0075.webp
    ./Canva/0076.webp
    ./Canva/0077.webp
    ./Canva/0078.webp
    ./Canva/0079.webp
    ./Canva/0080.webp
    ./Canva/0081.webp
    ./Canva/0082.webp
    ./Canva/0083.webp
    ./Canva/0084.webp
    ./Canva/0085.webp
    ./Canva/0086.webp
    ./Canva/0087.webp
    ./Canva/0088.webp
    ./Canva/0089.webp
    ./Canva/0090.webp
    ./Canva/0091.webp
    ./Canva/0092.webp
    ./Canva/0093.webp
    ./Canva/0094.webp
    ./Canva/0095.webp
    ./Canva/0096.webp
    ./Canva/0097.webp
    ./Canva/0098.webp
    ./Canva/0099.webp
    ./Canva/0100.webp
    ./Canva/0101.webp
    ./Canva/0102.webp
    ./Canva/0103.webp
    ./Canva/0104.webp
    ./Canva/0105.webp
    ./Canva/0106.webp
    ./Canva/0107.webp
    ./Canva/0108.webp
    ./Canva/0109.webp
    ./Canva/0110.webp
    ./Canva/0111.webp
    ./Canva/0112.webp
    ./Canva/0113.webp
    ./Canva/0114.webp
    ./Canva/0115.webp
    ./Canva/0116.webp
    ./Canva/0117.webp
    ./Canva/0118.webp
    ./Canva/0119.webp
    ./Canva/0120.webp
    ./Canva/0121.webp
    ./Canva/0122.webp
    ./Canva/0123.webp
    ./Canva/0124.webp
    ./Canva/0125.webp
    ./Canva/0126.webp
    ./Canva/0127.webp
    ./Canva/0128.webp
    ./Canva/0129.webp
    ./Canva/0130.webp
    ./Canva/0131.webp
    ./Canva/0132.webp
    ./Canva/0133.webp
    ./Canva/0134.webp
    ./Canva/0135.webp
    ./Canva/0136.webp
    ./Canva/0137.webp
    ./Canva/0138.webp
    ./Canva/0139.webp
    ./Canva/0140.webp
    ./Canva/0141.webp
    ./Canva/0142.webp
    ./Canva/0143.webp
    ./Canva/0144.webp
    ./Canva/0145.webp
    ./Canva/0146.webp
    ./Canva/0147.webp
    ./Canva/0148.webp
    ./Canva/0149.webp
    ./Canva/0150.webp
    ./Canva/0151.webp
    ./Canva/0152.webp
    ./Canva/0153.webp
    ./Canva/0154.webp
    ./Canva/0155.webp
    ./Canva/0156.webp
    ./Canva/0157.webp
    ./Canva/0158.webp
    ./Canva/0159.webp
    ./Canva/0160.webp
    ./Canva/0161.webp
    ./Canva/0162.webp
    ./Canva/0162.webp
    ./Canva/0163.webp
    ./Canva/0164.webp
    ./Canva/0165.webp
    ./Canva/0166.webp
    ./Canva/0167.webp
    ./Canva/0168.webp
    ./Canva/0169.webp
    ./Canva/0170.webp
    ./Canva/0171.webp
    ./Canva/0172.webp
    ./Canva/0173.webp
    ./Canva/0174.webp
    ./Canva/0175.webp
    ./Canva/0176.webp
    ./Canva/0178.webp
    ./Canva/0179.webp
    ./Canva/0180.webp  
`;
    return data.split("\n")[index];
  }

  const frameCount = 180;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.page1`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page1",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();

const t1 = gsap.timeline();

t1.to(".page1-hero-text", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1-hero-text",
    start: "top 20%",
    scrub: 1,
    // markers: true,
  },
});

t1.to(".page2 > img", {
  top: "-10%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2 > img",
    start: "top bottom",
    end: "top -30%",
    scrub: 1,
    // markers: true,
  },
});

let clutter = "";

document
  .querySelector(".page2>h3")
  .textContent.split("")
  .forEach((dets) => {
    clutter += `<span>${dets}</span>`;
    document.querySelector(".page2>h3").innerHTML = clutter;
  });

t1.to(".page2>h3>span", {
  color: "#000",
  stagger: 1,
  scrollTrigger: {
    trigger: `.page2>h3>span`,
    start: `top bottom`,
    end: `bottom 20%`,
    scroller: `.main`,
    // markers: true,
    scrub: 0.5,
  },
});

clutter = "";

document
  .querySelector(".page3>h1")
  .textContent.split("")
  .forEach((dets) => {
    clutter += `<span>${dets}</span>`;
    document.querySelector(".page3>h1").innerHTML = clutter;
  });

t1.to(".page3>h1>span", {
  color: "#000",
  stagger: 1,
  scrollTrigger: {
    trigger: `.page3>h1>span`,
    start: `top bottom`,
    end: `bottom 50%`,
    scroller: `.main`,
    // markers: true,
    scrub: 0.5,
  },
});

clutter = "";

document
  .querySelector(".page3>h1:nth-child(3)")
  .textContent.split("")
  .forEach((dets) => {
    clutter += `<span>${dets}</span>`;
    document.querySelector(".page3>h1:nth-child(3)").innerHTML = clutter;
  });

t1.to(".page3>h1:nth-child(3)>span", {
  color: "#000",
  stagger: 1,
  scrollTrigger: {
    trigger: `.page3>h1:nth-child(3)>span`,
    start: `top 80%`,
    end: `bottom 50%`,
    scroller: `.main`,
    // markers: true,
    scrub: 0.5,
  },
});

function canvas1() {
  const canvas = document.querySelector(".page6>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./Canva1/0001.webp
    ./Canva1/0002.webp
    ./Canva1/0003.webp
    ./Canva1/0004.webp
    ./Canva1/0005.webp
    ./Canva1/0006.webp
    ./Canva1/0007.webp
    ./Canva1/0008.webp
    ./Canva1/0009.webp
    ./Canva1/0010.webp
    ./Canva1/0011.webp
    ./Canva1/0012.webp
    ./Canva1/0013.webp
    ./Canva1/0014.webp
    ./Canva1/0015.webp
    ./Canva1/0016.webp
    ./Canva1/0017.webp
    ./Canva1/0018.webp
    ./Canva1/0019.webp
    ./Canva1/0020.webp
    ./Canva1/0021.webp
    ./Canva1/0022.webp
    ./Canva1/0023.webp
    ./Canva1/0024.webp
    ./Canva1/0025.webp
    ./Canva1/0026.webp
    ./Canva1/0027.webp
    ./Canva1/0028.webp
    ./Canva1/0029.webp
    ./Canva1/0030.webp
    ./Canva1/0031.webp
    ./Canva1/0032.webp
    ./Canva1/0033.webp
    ./Canva1/0034.webp
    ./Canva1/0035.webp
    ./Canva1/0036.webp
    ./Canva1/0037.webp
    ./Canva1/0038.webp
    ./Canva1/0039.webp
    ./Canva1/0040.webp
    ./Canva1/0041.webp
    ./Canva1/0042.webp
    ./Canva1/0043.webp
    ./Canva1/0044.webp
    ./Canva1/0045.webp
    ./Canva1/0046.webp
    ./Canva1/0047.webp
    ./Canva1/0048.webp
    ./Canva1/0049.webp
    ./Canva1/0050.webp
    ./Canva1/0051.webp
    ./Canva1/0052.webp
    ./Canva1/0053.webp
    ./Canva1/0054.webp
    ./Canva1/0055.webp
    ./Canva1/0056.webp
    ./Canva1/0057.webp
    ./Canva1/0058.webp
    ./Canva1/0059.webp
    ./Canva1/0060.webp
    ./Canva1/0061.webp
    ./Canva1/0062.webp
    ./Canva1/0063.webp
    ./Canva1/0064.webp
    ./Canva1/0065.webp
    ./Canva1/0066.webp
    ./Canva1/0067.webp
    ./Canva1/0068.webp
    ./Canva1/0069.webp
    ./Canva1/0070.webp
    ./Canva1/0071.webp
    ./Canva1/0072.webp
    ./Canva1/0073.webp
    ./Canva1/0074.webp
    ./Canva1/0075.webp
    ./Canva1/0076.webp
    ./Canva1/0077.webp
    ./Canva1/0078.webp
    ./Canva1/0079.webp
    ./Canva1/0080.webp
    ./Canva1/0081.webp
    ./Canva1/0082.webp
    ./Canva1/0083.webp
    ./Canva1/0084.webp
    ./Canva1/0085.webp
    ./Canva1/0086.webp
    ./Canva1/0087.webp
    
`;
    return data.split("\n")[index];
  }

  const frameCount = 87;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.page6`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page6",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas1();

t1.to(".page5", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page5",
    start: "top 30%",
    end: "top 10%",
    scrub: 1,
    // markers: true,
  },
});

t1.from(".color", {
  top: "100vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page8",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
    // markers: true,
  },
});
