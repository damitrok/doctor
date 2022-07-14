import React from "react";
import Category from "../components/category";
import CirculMenu from "../components/CirculMenu";
import Massage from "../components/massage";
import adultImg from "../public/adult.png";
import childImg from "../public/child.png";

const Index = () => {
    
  return (
    <div className="container">
      <h1>А вдруг CMA?</h1>
      <h2>Выберете, кто Ваш пациент:</h2>
      <div className="wrap">
        <div className="categories">
          <Category text="Взрослый" imgSrs={adultImg.src} />
          <div className="massageWrap">
            <Massage danTex="Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте. " />
            <Massage danTex="По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. " />
            <Massage danTex="По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. " />
          </div>
        </div>
        <div className="categories">
          <Category text="Ребенок" imgSrs={childImg.src} />
          <div className="massageWrap">
            <Massage
              danTex="Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
в отношении наличия СМА.
"
            />
            <Massage
              danTex="Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
дегенерации при прогрессировании заболевания"
            />
          </div>
        </div>
        
      </div>
      <h4>Сообщает ли один из ваших пациентов о следующих симптомах? <lite>(нажмите на любую иконку и узнайте больше)</lite></h4>
      <CirculMenu/>
    </div>

   
  );
};

export default Index;
