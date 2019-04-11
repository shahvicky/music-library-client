
/**
 * These are helper functions that are scoped globally
 * so we can also use them anywhere in our app without
 * requiring them. The “to” function helps with handling
 * promises and errors. It is a super helpful function.
 * The ReE and ReS functions help the controllers send
 * responses in a unified way.
 */
import pe from 'parse-error'; // parses error so you can read error message and handle them accordingly
// global function that will help use handle promise rejections,
// this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/

export function to(promise) {
  return promise
    .then(data => [null, data]).catch(err =>
      [pe(err)]);
}


export function TE(err_message, log) { // TE stands for Throw Error
  if (log) {
    console.error(err_message);
  }

  throw new Error(err_message);
}

export function ReE(res, err, code) { // Error Web Response
  if (typeof err === 'object' && typeof err.message !== 'undefined') {
    err = err.message;
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json({ success: false, error: err });
}

export function ReS(res, data, code) { // Success Web Response
  let send_data = { success: true };

  if (typeof data === 'object') {
    send_data = Object.assign(data, send_data);// merge the objects
  }

  if (typeof code !== 'undefined') res.statusCode = code;

  return res.json(send_data);
}

