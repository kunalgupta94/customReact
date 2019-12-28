import React, { useState, useEffect } from "react";
import "./articleLayout.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navigationbar from "../../Navigationbar/Navigationbar";
import Title from "./Title";
import './title.css'
function ArticleLayout() {
  let containerRef;
  useEffect(() => {
    let timeOutValue = 0;

    const hideNavigation = value => {
      if (value) {
        containerRef.style.display = "none";
      } else {
        containerRef.style.display = "flex";
      }
    };
    const setTimeOut = () => setTimeout(() => hideNavigation(true), 2000);
    const mouseOnBottom = e => 100 - (100 * e.y) / e.view.innerHeight < 5;
    const containerHidden = () => containerRef.style.display === "none";
    const mouseOnNavigator = e => e.path.includes(containerRef);
    hideNavigation(false);

    const eventListenFunc = e => {
      clearTimeout(timeOutValue);
      if (!mouseOnNavigator(e)) {
        if (containerHidden() && mouseOnBottom(e)) {
          hideNavigation(false);
          timeOutValue = setTimeOut();
        } else {
          timeOutValue = setTimeOut();
        }
      } else {
        containerRef.style.display = "flex";
      }
    };

    const pageClickListner = e => {
      if (!mouseOnNavigator(e)) {
        hideNavigation(true)
      }
      console.log("value")
    }

    window.addEventListener("mousemove", e => eventListenFunc(e));
    window.addEventListener("click", e => pageClickListner(e))
  }, []);

  return (
    <div className="layoutmain">
      <div className="sidebardiv">
        <Sidebar />
      </div>
      <div className="maindiv">
        <h1 className="title">
        <Title editable maxLength="50" rows="1" placeholder="Enter a title" />
        </h1>
        {/* <Title className="body" editable maxLength="1000" rows="8" placeholder="Enter body" /> */}
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          aliquet odio. Nunc at lacinia magna, in tristique nisl. Nullam
          facilisis dolor volutpat pharetra congue. Vestibulum egestas gravida
          erat porttitor imperdiet. Cras a aliquam nisl, et pellentesque nibh.
          Mauris malesuada tellus malesuada justo mollis, sit amet interdum
          neque consequat. Quisque eget lacus eget est suscipit gravida.
          Pellentesque blandit erat orci, id semper justo hendrerit non. Integer
          in finibus purus. Nulla sed hendrerit nisl. Donec sed nibh vitae ex
          sodales dignissim in sit amet leo. Nullam ante metus, varius at sem
          sodales, pretium convallis ex. Curabitur mattis ligula imperdiet magna
          finibus, ut pharetra sapien tincidunt. Duis eget erat in tellus auctor
          lobortis. Aliquam erat volutpat. Pellentesque non malesuada purus, at
          pharetra justo. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Quisque sit amet turpis
          volutpat, venenatis libero sed, sodales mi. Donec bibendum feugiat
          efficitur. Ut leo magna, pulvinar ut fermentum eget, bibendum sed
          neque. Donec sodales, libero nec facilisis ornare, mi dolor
          ullamcorper eros, a scelerisque lacus urna at nulla. Phasellus
          consectetur mattis finibus. Morbi in sagittis nisl. Vivamus ultricies
          nibh in urna malesuada, a scelerisque leo lacinia. Proin eros mauris,
          vulputate quis nulla vehicula, scelerisque lacinia ipsum. Fusce
          accumsan massa id libero ultrices, ac vehicula mauris laoreet. Sed
          aliquam at dolor ut malesuada. Vivamus hendrerit facilisis
          ullamcorper. Cras ac sodales mauris. Mauris ullamcorper fringilla quam
          a malesuada. Donec sit amet nisl vitae eros commodo gravida eget
          scelerisque nibh. In sollicitudin vel leo quis pulvinar. Pellentesque
          dapibus sem eget mauris mattis, in convallis nunc venenatis. Cras in
          molestie diam. Fusce ullamcorper magna a pellentesque gravida. Quisque
          viverra dolor eget nunc vulputate pharetra. Proin convallis elit in
          odio posuere sagittis. Suspendisse potenti. Proin quis quam nibh. Sed
          imperdiet lacus eu velit tincidunt, quis auctor tortor cursus. Donec
          eu augue ac felis volutpat ultricies a eget eros. Proin finibus purus
          in lectus mollis elementum. Mauris pretium aliquam arcu, non sagittis
          risus euismod at. Nunc vel metus eros. Etiam pretium consectetur
          ipsum, at vulputate felis euismod egestas. Nulla sollicitudin, sem vel
          venenatis imperdiet, ipsum justo fermentum orci, id pulvinar ante
          nulla quis neque. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Vestibulum porttitor arcu ac dui rhoncus, vel auctor risus
          iaculis. Vestibulum justo nisl, consequat eget ex sit amet, sodales
          lobortis eros. Aenean imperdiet mauris sed lectus aliquam, sed
          ullamcorper odio porta. Nulla euismod metus quam, eget mattis leo
          consequat et. Duis feugiat faucibus est, nec tempor enim fringilla
          euismod. Nam sapien magna, faucibus nec maximus ut, tempus a ligula.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis
          lacinia maximus sem in mollis. Suspendisse ut purus volutpat libero
          fermentum egestas.
        </p>
        <Navigationbar ref={el => (containerRef = el)} />
      </div>
    </div>
  );
}

export default ArticleLayout;
