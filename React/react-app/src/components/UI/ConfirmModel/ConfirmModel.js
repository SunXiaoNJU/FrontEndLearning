import React from "react";
import css from "./ConfirmModel.module.css";
import Backdrop from "../Backdrop/Backdrop";

function ConfirmModel(props) {
  return (
    <Backdrop>
      <div className={css.confirmModel}>
        <div className={css.confirmText}>
          <p>{props.content}</p>
        </div>
        <div className={css.buttonBlock}>
          <button className={css.confirmButton}>确认</button>
          <button className={css.cancelButton}>取消</button>
        </div>
      </div>
    </Backdrop>
  );
}

export default ConfirmModel;
