import React from 'react'

 function NewLessons() {
  return (
    <div className="form-container">
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
    <label class="form-check-label" for="exampleCheck1">Always sign in on this device</label>
  </div>
  <div class="text-end">
    <button type="submit" class="btn btn-subtle me-2">Cancel</button>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}
export default NewLessons;
