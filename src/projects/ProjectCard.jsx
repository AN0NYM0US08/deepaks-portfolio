import React from "react";
import IconContainer from "./Projects";
import "./Projects.css";

function ProjectCard() {
  return (
    <div className="project-container" id="projects">
      <h1>Projects</h1>
      <p>Click on the image to view the application.</p>
      <div className="project-container2">
        <IconContainer
          xmlns="http://www.w3.org/2000/svg"
          data={[
            {
              text: "Notes-App",
              rotation: "-15",
              viewBox: "0 0 496 512",
              path: "https://cool-lamington-9e540d.netlify.app/",
              imageUrl:
                "https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX",
            },

            {
              text: "Typing-App",
              rotation: "5",
              viewBox: "0 0 640 512",
              path:"",
              imageUrl:
                "https://www.upwork.com/catalog-images-resized/7cd1985e0c487749e0c119025153a3a6/thumbnail-medium",
            },
            {
              text: "Absolute-Machines",
              rotation: "25",
              viewBox: "0 0 576 512",
              path:"https://an0nym0us08.github.io/absolute.mac/pp2.html",
              imageUrl:
                "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
            },
            {
              text: "Quick-Quiz",
              rotation: "-15",
              viewBox: "0 0 496 512",
              path:"https://quick-quizzz.netlify.app",
              imageUrl:
                "https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg",
            },
          ]}
        />
        <IconContainer
          xmlns="http://www.w3.org/2000/svg"
          data={[
            {
              text: "Tic Tac Toe",
              rotation: "-15",
              viewBox: "0 0 496 512",
              path:"https://symphonious-pudding-e4a40a.netlify.app",
              imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAnCP1J4K5flA785tFsZjEiCgNP-zvliTeA&usqp=CAU",
            },

            {
              text: "Clascxy",
              rotation: "5",
              viewBox: "0 0 640 512",
              path:"https://clascxys.netlify.app",
              imageUrl:"https://media.istockphoto.com/id/531492115/vector/set-of-colorful-empty-shopping-bags-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=ae7RjBWM_Q7E4sA1uBd69ghoze4zq2Vx6Vut1rV4tfM=",
            },
            {
              text: "Temperature-converter",
              rotation: "25",
              viewBox: "0 0 576 512",
              path:"https://temperature-converter101.netlify.app",
              imageUrl:"https://health.wordpress.clevelandclinic.org/wp-content/uploads/sites/3/2020/03/bodyTempNormal-marty-033020-770x533-1.jpg",
            },
            {
              text: "Calculator",
              rotation: "-15",
              viewBox: "0 0 496 512",
              path:"https://moonlit-douhua-00cae7.netlify.app",
              imageUrl:"https://www.shutterstock.com/image-vector/flat-calculator-vector-illustration-long-600nw-554850088.jpg",
            },
          ]}
        />
        <IconContainer
          xmlns="http://www.w3.org/2000/svg"
          data={[
            {
              text: "Gym-site",
              rotation: "-15",
              viewBox: "0 0 496 512",
              path:"https://fitclub101.pages.dev",
              imageUrl:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D",
            },

            {
              text: "Banking-site",
              rotation: "5",
              viewBox: "0 0 640 512",
              path:"https://banking101.netlify.app",
              imageUrl:"data:image/jpeg;base64,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",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
