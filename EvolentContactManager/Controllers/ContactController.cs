using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EvolentContactManager.Models;
using EvolentContactManager.Services;

namespace EvolentContactManager.Controllers
{
    public class ContactController : ApiController
    {
        private ContactRepository contactRepository;


        public ContactController()
        {
            this.contactRepository = new ContactRepository();
        }

        [HttpGet]
        public Contact[] Get()
        {
            return this.contactRepository.GetAllContacts();
        }

        [HttpPost]
        public HttpResponseMessage Post(Contact contact)
        {
            this.contactRepository.SaveContact(contact);

            var response= Request.CreateResponse<Contact>(System.Net.HttpStatusCode.Created,contact);

            return response;
        }

        [HttpGet]
        public void Delete(int id)
        {
            
        }

    }
}
