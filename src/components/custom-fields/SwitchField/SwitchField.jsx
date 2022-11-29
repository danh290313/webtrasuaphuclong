import { Switch, Typography } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
function SwitchField(props) {
  const { field, form, label, disabled, checked, confirm } = props;
  const { name } = field;
  const { errors, touched, setFieldValue } = form;
  const showError = errors[name] && touched[name];
  // console.log(form);
  const handleOnChange = (e) => {
    e.preventDefault();
    handleOpen();
    field.onChange();
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleConfirm = () => {
    setOpen(!open);
    // field.value = !field.value;
    setFieldValue("active", false);
  };
  return (
    <>
      <Switch
        id={name}
        checked={field.value}
        {...field}
        onChange={
          confirm && field.value === true ? handleOnChange : field.onChange
        }
        onBlur={() => {}}
        disabled={!!disabled}
        label={label}
        labelProps={{
          className: "text-lg font-normal text-gray-700",
        }}
      />
      <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          <Typography color="inherit" className="font-medium capitalize">
            {confirm}
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default SwitchField;
