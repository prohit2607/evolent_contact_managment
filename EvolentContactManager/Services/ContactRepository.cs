using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using EvolentContactManager.Models;

namespace EvolentContactManager.Services
{
    public class ContactRepository
    {
        private const string CacheKey = "ContactStore";

        public ContactRepository()
        {
            var context = HttpContext.Current;

            if (context != null)
            {
                if (context.Cache[CacheKey] == null)
                {
                   var contacts= new Contact[]
                    {
                        new Contact
                        {
                            Id=1,
                            FirstName="Vijay",
                            LastName="Anna",
                            Email="vijay.anna@evolent.com",
                            PhoneNumber="2014887234",
                            status="Active"
                        },
                        new Contact
                        {
                            Id=2,
                            FirstName="Rahul",
                            LastName="Neela",
                            Email="rahul.neela@evolent.com",
                            PhoneNumber="4027154667",
                            status="Active"
                        }
                    };
                    context.Cache[CacheKey] = contacts;
                }
            }
        }

        public Contact[] GetAllContacts()
        {
            var context = HttpContext.Current;
            if (context != null)
            {
                return (Contact[])context.Cache[CacheKey];
            }
            return new Contact[]
            {
                new Contact
                {
                        Id=0,
                        FirstName="Place",
                        LastName="Holder",
                        Email="place.holder@evolent.com",
                        PhoneNumber="232411",
                        status="Inactive"
                }
            };
        }

        public bool SaveContact(Contact contact)
        {
            var context = HttpContext.Current;

            if (context != null)
            {
                try
                {
                    var currentData = ((Contact[])context.Cache[CacheKey]).ToList();
                    currentData.Add(contact);
                    context.Cache[CacheKey] = currentData.ToArray();
                    return true;
                }
                catch (Exception exception)
                {
                    Console.WriteLine(exception.ToString());
                    return false;
                }
            }
            return false;
        }       
    }
}