import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  visible: boolean;
  closeModal: () => void;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const ModalRemoverFuncionario = ({
  visible,
  closeModal,
  onClick,
}: ModalProps) => {
  return (
    <>
      <Modal open={visible} onClose={closeModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tem certeza que deseja remover o funcionário?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Essa decisão não pode ser revertida.
          </Typography>

          <CardActions sx={{ justifyContent: "space-around" }}>
            <Button onClick={closeModal}>Cancelar</Button>
            {/* @ts-ignore */}
            <Button onClick={onClick} color="error">
              Remover Funcionário
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </>
  );
};

export default ModalRemoverFuncionario;
