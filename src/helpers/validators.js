/**
 * Created by zavadskyi on 9/13/18.
 */


export const isEmailValid = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


export const isNamelValid = name => {
  var re = /^[A-Za-z\s]+$/;
  return re.test(String(name).toLowerCase());
};
