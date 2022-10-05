import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globol";
import { Dashboard } from "./components/Dashboard/index";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpen={handOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onClose={handCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
