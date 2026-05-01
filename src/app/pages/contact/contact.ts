import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    // http://localhost:3000/send-email
    this.http.post('https://contact-backend.onrender.com/send-email', this.formData)
    .subscribe({
      next: (res) => {
        console.log(res);
        alert('Email sent successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('Error sending email');
      }
    });
  }

}
