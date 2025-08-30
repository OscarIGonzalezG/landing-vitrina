import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Notificación
  showNotification = false;
  notificationMessage = '';
  notificationType: 'success' | 'error' = 'success';
  notificationAnimation = 'animate-popIn'; //Control animación

  // Cambia por tus datos de EmailJS
  private serviceID = 'TU_SERVICE_ID';
  private templateID = 'TU_TEMPLATE_ID';
  private publicKey = 'TU_PUBLIC_KEY'; 

  async onSubmit(){
    try{
      const result: EmailJSResponseStatus = await emailjs.send(
        this.serviceID,
        this.templateID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message
        },
        this.publicKey
      );

      console.log('✅ Enviado:', result.text);

      // Mostrar notificación de éxito
      this.notificationMessage = '🎉 Mensaje enviado con éxito, te responderemos pronto!';
      this.notificationType = 'success';
      this.showNotification = true;
      this.notificationAnimation = 'animate-popIn';

      this.formData = {name: '', email: '', message: ''}; // Reset form
    
    } catch (error) {
      
      console.error('❌ Error al enviar:', error);
      
      // Mostrar notificación de error
      this.notificationMessage = '❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.';
      this.notificationType = 'error'; 
      this.showNotification = true;
      this.notificationAnimation = 'animate-popIn';
    }

    // Auto cerrar después de 5s con animación
    setTimeout(() => this.closeNotification(), 5000);
  }
    // Método para cerrar con animación
  closeNotification() {
    this.notificationAnimation = 'animate-popOut';
    setTimeout(() => {
      this.showNotification = false;
      this.notificationAnimation = 'animate-popIn'; // reset para la próxima
    }, 350); // mismo tiempo que popOut
  }
}
