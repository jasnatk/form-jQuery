$("#Account-details").validate({
      rules: {
        name: {
          required: true,
          minlength: 3,
          maxlength: 50
        },
        email: {
          required: true
        },
        phoneno: {
          required: true,
          minlength: 10,
          maxlength: 14
        },
        age: {
          required: true,
          range: [18, 120]
        },
        gender: {
          required: true,
          minlength: 4,
          maxlength: 15
        },
        address: {
          maxlength: 50
        }
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: "Your name must be at least 3 characters long",
          maxlength: "Your name must be less than 50 characters long"
        },
        email: {
          required: "Please enter your email"
        },
        phone: {
          required: "Please enter your phone number",
          minlength: "Your phone number must be at least 10 characters long",
          maxlength: "Your phone number must be less than 14 characters long"
        },
        age: {
          required: "Please enter your age",
          range: "Your age must be between 18 and 120"
        },
        gender: {
          required: "Please specify your gender",
          minlength: "Gender description must be at least 4 characters long",
          maxlength: "Gender description must be less than 15 characters long"
        },
        address: {
          maxlength: "Your address must be less than 50 characters long"
        }
      }
    });
  
  