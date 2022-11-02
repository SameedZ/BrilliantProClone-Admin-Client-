import React from "react"
import { Redirect } from "react-router-dom"

// My Imports
import Dashboard from "../pages/Dashboard/index"
import Projects from '../pages/Projects/index';
import Teams from '../pages/Teams/index';
import MyTasks from '../pages/MyTasks/index';
import AddLearner from "pages/Learner/AddLearner";
import RemoveLearner from "pages/Learner/RemoveLearner";
import ViewLearners from "pages/Learner/ViewLearners";
import UpdateLearner from "pages/Learner/UpdateLearner";
import AddCourse from "pages/Courses/AddCourse";
import RemoveCourse from "pages/Courses/RemoveCourse";
import SearchCourse from "pages/Courses/SearchCourse";
import CourseCatalog from "pages/Courses/CourseCatalog";


import AddEnrollment from "pages/Enrollments/AddEnrollment";
import RemoveEnrollment from "pages/Enrollments/RemoveEnrollment";
import ViewAllEnrollments from "pages/Enrollments/ViewAllEnrollments";

import AddMaterial from "pages/Material/AddMaterial";
import AddAssessment from "pages/Assessments/AddAssessment";

// Forms
import FormElements from "../pages/Forms/FormElements"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"
import FormValidations from "../pages/Forms/FormValidations"
import FormUpload from "../pages/Forms/FormUpload"
import FormXeditable from "../pages/Forms/FormXeditable"

//Icons
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import Iconion from "../pages/Icons/Iconion"
import IconFontawesome from "../pages/Icons/IconFontawesome"
import IconThemify from "../pages/Icons/IconThemify"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconTypicons from "../pages/Icons/IconTypicons"



const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  {path:"/projects" , component:Projects},
  {path:"/teams" , component:Teams},
  {path:"/mytasks" , component:MyTasks},
  {path:"/addlearner" , component:AddLearner},
  {path:"/removelearner" , component:RemoveLearner},
  {path:"/viewlearner" , component:ViewLearners},
  {path:"/updatelearner" , component:UpdateLearner},
  {path:"/addcourse" , component: AddCourse},
  {path:"/removecourse" , component:RemoveCourse},
  {path:"/searchcourse" , component:SearchCourse},
  {path:"/coursecatalog" , component:CourseCatalog},

  {path:"/enrollearner" , component:AddEnrollment},
  {path:"/removenrollment" , component:RemoveEnrollment},

  {path:"/viewallenrollments" , component: ViewAllEnrollments },


  {path:"/addmaterial" , component:AddMaterial},
  {path:"/uploadassessment" , component:AddAssessment},

  // // Forms
  { path: "/form-elements", component: FormElements },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-validation", component: FormValidations },
  { path: "/form-xeditable", component: FormXeditable },

  // // Icons
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-ion", component: Iconion },
  { path: "/icons-fontawesome", component: IconFontawesome },
  { path: "/icons-themify", component: IconThemify },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-typicons", component: IconTypicons }, 

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]


export { userRoutes }