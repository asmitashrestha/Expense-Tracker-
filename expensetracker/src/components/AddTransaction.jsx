import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context";

const AddTransaction = ({onClose, isOpen}) => {

  const {formData,setFormData,value,setValue,handleFormSubmit} = useContext(GlobalContext)
  
  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }


  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter transctions description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input 
              placeholder="Enter amount"
               name="amount" 
               type="number"
               onChange={handleFormChange} />
            </FormControl>

            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio checked={formData.type === "income"}
              onChange={handleFormChange}
              name="type" colorScheme="red" value="income">Income</Radio>
              <Radio 
              onChange={handleFormChange} 
              checked={formData.type === "expense"}
              name="type" color={'blue'} value="expense">Expense</Radio>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button mr={'4'} onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="submit">Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransaction;
