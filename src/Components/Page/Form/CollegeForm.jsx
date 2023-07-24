import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const CollegeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(data);
  };
  return (
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Form</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="text-input my-2 input input-bordered"
                  placeholder="Candidate Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                      className="text-input my-2 input input-bordered"
                      placeholder="subject"
                      {...register("subject", { required: true })}
                    />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                      className="text-input input input-bordered"
                      placeholder="your email"
                      {...register("email", { required: true })}
                      type="email"
                    />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                      className="text-input input input-bordered"
                      placeholder="Phone Number"
                      {...register("phone", { required: true })}
                    />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                      className="text-input my-2 input input-bordered"
                      placeholder="photo url"
                      {...register("image", { required: true })}
                      type="url"
                    />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                      className="text-input my-2 input input-bordered"
                      placeholder="date"
                      {...register("date", { required: true })}
                      type="date"
                    />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                      className="text-input input input-bordered"
                      placeholder="Address"
                      {...register("address", { required: true })}
                    />
              </div>
              {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <div className="form-control mt-6">
                      <input className="btn btn-primary" type="submit" />
                    </div>
            </Form>
          </div>
        </div>
      </div>
  );
};

export default CollegeForm;
