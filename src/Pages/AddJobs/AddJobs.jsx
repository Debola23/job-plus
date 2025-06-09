import { Footer } from '../../Components/Footer/Footer';
import { Navv } from '../../Components/Navv/Navv';
import { useState, useEffect } from 'react';
import Styles from './AddJobs.module.css';
import { Scroll } from '../../Components/Scroll/Scroll';

export const AddJobs = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    companyDescription: '',
    roles: '',
    experience: '',
    jobType: '',
    workMode: '',
    seniority: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    map: '',
    salaryAmount: '',
    salaryType: '',
    benefits: '',
    deadline: '',
  });

  useEffect(() => {
    const savedForm = localStorage.getItem('jobFormData');
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem('jobFormData', JSON.stringify(updated));
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted job data:', formData);
    alert('Job submitted successfully!');

    setFormData({
      company: '',
      title: '',
      companyDescription: '',
      roles: '',
      experience: '',
      jobType: '',
      workMode: '',
      seniority: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      map: '',
      salaryAmount: '',
      salaryType: '',
      benefits: '',
      deadline: '',
    });
    localStorage.removeItem('jobFormData');
  };

  return (
    <>
      <div className={Styles.addJobs}>
        <Navv />
        <div className={Styles.hero} id={Styles.hr}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3 id={Styles.hh3}>Add Jobs</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <img src="/Images/home.png" className="h-[18px] w-[16px]" alt="Home Icon" />
                    <a href="/" className={Styles.blink}>Home</a>
                  </div>
                  <span className="mx-1 text-gray-400">/</span>
                  <div className="font-medium text-gray-800">Add Listing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JOB FORM */}
        <div className="container">
          <div className="row">
            <div className={Styles.formBox}>
              <form onSubmit={handleSubmit}>
                {/* 1. Description */}
                <div>
                  <h2 className="text-xl mb-4" id={Styles.t1}>1. Basic Job Details</h2>
                  <p className={Styles.t2}>These fields are mandatory</p>

                  <input type="text" name="company" placeholder="Company Name (Employer)" value={formData.company} onChange={handleChange} className="w-full h-[3.5rem] p-2 border mb-6" id={Styles.b1} required />

                  <input type="text" name="title" placeholder="Job Title (Mandatory)" value={formData.title} onChange={handleChange} className="w-full h-[3.5rem] p-2 border mb-6" id={Styles.b1} required />

                  <input type="text" name="companyDescription" placeholder="Company Description" value={formData.companyDescription} onChange={handleChange} className="w-full h-[8.2rem] p-2 border mb-6" id={Styles.b1} required />

                  <input type="text" name="roles" placeholder="Company Roles & Responsibilities" value={formData.roles} onChange={handleChange} className="w-full h-[8.2rem] p-2 border mb-6" id={Styles.b1} required />

                  <input type="text" name="experience" placeholder="Experience (1-3 years)" value={formData.experience} onChange={handleChange} className="w-full h-[4rem] p-2 border mb-6" id={Styles.b1} required />

                  <h6 className={Styles.b2}>Job Type</h6>
                  <div className="row mb-[1.5rem]">
                    <div className="col-lg-4 col-md-6" id={Styles.row2}>
                      <select name="jobType" value={formData.jobType} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" required>
                        <option value="">Select Job Type</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="internship">Internship</option>
                        <option value="contract">Contract</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6" id={Styles.row2}>
                      <select name="workMode" value={formData.workMode} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" required>
                        <option value="">Select Work Mode</option>
                        <option value="remote">Remote</option>
                        <option value="on-site">On-site</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6" id={Styles.row2}>
                      <select name="seniority" value={formData.seniority} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" required>
                        <option value="">Select Seniority</option>
                        <option value="entry">Entry level</option>
                        <option value="mid">Mid level</option>
                        <option value="senior">Senior level</option>
                        <option value="all">All</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Location */}
                <div className="mb-[3rem] mt-[3rem]">
                  <h2 className="text-xl mb-4" id={Styles.t1}>2. Location</h2>
                  <p className={Styles.t2}>Job Location</p>
                  <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" id={Styles.row22} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-2 border h-[3.5rem]" id={Styles.row22} />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="p-2 border h-[3.5rem]" id={Styles.row22} />
                  </div>
                  <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="w-full p-2 border mt-2 h-[3.5rem]" id={Styles.row2} />
                  <div className={Styles.googleMap}>
                    <iframe title="map" src="https://www.google.com/maps/embed?...(your-map-url)" allowFullScreen loading="lazy" style={{ width: '100%', height: '400px', border: '0' }} />
                  </div>
                  <input type="text" name="map" placeholder="Map Coordinates" value={formData.map} onChange={handleChange} className="w-full p-2 border mt-2 h-[3.5rem]" id={Styles.row2} />
                </div>

                {/* 3. Payment */}
                <div className="mb-[3rem] mt-[3rem]">
                  <h2 className="text-xl mb-4" id={Styles.t1}>3. Payment</h2>
                  <p className={Styles.t2}>Job Compensation</p>
                  <div className="row mb-[1.5rem]">
                    <div className="col-md-6" id={Styles.row2}>
                      <input type="number" name="salaryAmount" placeholder="Salary in ₦ (Only Numbers)" value={formData.salaryAmount} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" required />
                    </div>
                    <div className="col-md-6" id={Styles.row2}>
                      <input type="text" name="salaryType" placeholder="Salary Type (Monthly, Hourly, Per-project)" value={formData.salaryType} onChange={handleChange} className="w-full p-2 border h-[3.5rem]" required />
                    </div>
                  </div>
                  <input type="text" name="benefits" placeholder="Company Benefits (Healthcare, 401k, PTO)" value={formData.benefits} onChange={handleChange} className="w-full p-2 border mt-2 h-[3.5rem]" id={Styles.row2} />
                </div>

                {/* 4. Application Details */}
                <div className="mb-[3rem] mt-[3rem]">
                  <h2 className="text-xl mb-4" id={Styles.t1}>4. Application Details</h2>
                  <p className={Styles.t2}>Application</p>
                  <div className="row">
                    <div className="col-md-6" id={Styles.row22}>
                      <p>Send your application to: jobplus@jobs.com</p>
                    </div>
                    <div className="col-md-6" id={Styles.row22}>
                      Application Deadline
                      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="p-2 border w-full h-[2rem]" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mb-[5rem]">
                  <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500 transition">
                    Submit Listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Scroll />
        <Footer />
      </div>
    </>
  );
};
