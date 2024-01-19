$(document).ready(function () {
    const projectData = [
      {
        name: "3 Column Preview Card",
        type: "Web",
        githubUrl:
          "https://github.com/ROOHITH/3-column-preview-card-component",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/ayzg5qgrn2zvqmb0qtt9.jpg",
      },
      {
        name: "Stats Preview Card Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/Stats-preview-card-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/fspflwtt9guonos5dz8x.jpg",
      },
      {
        name: "NFT Preview Card Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/NFT-preview-card-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/kekqz4tyjn9yuyobyp3f.jpg",
      },
      {
        name: "Results Summary Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/Results-summary-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/hcq4nos32thmxrc5j3xp.jpg",
      },
      {
        name: "Interactive Rating Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/Interactive-rating-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/fjnrkfrcceplmtqa4gc3.jpg",
      },
      {
        name: "Product Preview Card Component",
        type: "Web",
        githubUrl:
          "https://roohith.github.io/Product-preview-card-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/fehciahgate8ucrvcyez.jpg",
      },
      {
        name: "Newsletter Sign-up Form with Success Message",
        type: "Web",
        githubUrl:
          "https://roohith.github.io/Newsletter-sign-up-form-with-success-message/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/wbkkosywarjnva3hi96w.jpg",
      },
      {
        name: "Order Summary Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/Order-summary-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/tynaxisj4kkxo10kwurf.jpg",
      },
      {
        name: "Age Calculator App",
        type: "Web",
        githubUrl: "https://roohith.github.io/Age-calculator-app/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/wmouefa45z63s7czsh6x.jpg",
      },
      {
        name: "QR Code Component",
        type: "Web",
        githubUrl: "https://roohith.github.io/QR-code-component/",
        imageUrl:
          "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/jdyca4tynmflkzu0d7q1.jpg",
      },
      {
        name: "Codecademy Docs",
        type: "OpenSource", // Set the type to OpenSource
        githubUrl:
          "https://www.codecademy.com/resources/docs/html/attributes/id",
        imageUrl: "./assets/img/OpenSourceImg1.png",
      },
      // Add other project data here
    ];

    const portfolioGrid = $("#portfolio-grid");
    if (projectData.length === 0) {
      // If there are no projects, display a message
      portfolioGrid.html("<p>No projects available.</p>");
    } else {
      projectData.forEach((project, index) => {
        const projectItem = $(
          `<div class="item ${project.type} col-sm-6 col-md-4 col-lg-4 mb-4"></div>`
        );

        projectItem.html(`
      <a href="work-single.html?project=${index}" class="item-wrap fancybox" target="_blank">
        <div class="work-info">
          <h3>${project.name}</h3>
          <span>${project.type}</span>
        </div>
        <img class="img-fluid" alt="" data-testid="left-image" src="${project.imageUrl}" />
      </a>
    `);

        portfolioGrid.append(projectItem);
      });
    }
  });