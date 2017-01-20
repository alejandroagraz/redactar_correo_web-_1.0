using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Web.Services.Description;
using System.Web.UI.HtmlControls;

using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Net;

namespace redactarCorreo
{
    public partial class _Default : Page
    {
        string[] contactos;

        public DataTable devolverDestinatarios(string idcliente, string NombreReporte)
        {
            DataTable miDataTable = new DataTable();
            SqlConnection conexion = new SqlConnection();

            try
            {
                string consulta = "SELECT destinatarios.email, destinatarios.carbon_copy, reportes.asunto, reportes.mensaje FROM DESTINATARIOS, ";
                consulta += "reportes, reporte_destinatario ";
                consulta += " WHERE	reporte_destinatario.destinatario_id = destinatarios.destinatario_id and ";
                consulta += "reportes.reporte_id = reporte_destinatario.reporte_id AND  ";
                consulta += "reportes.NAME = '" + NombreReporte + "' AND  ";
                consulta += "reporte_destinatario.CLIENTE = '" + idcliente + "'   ";

                conexion.ConnectionString = "Persist Security Info=False;Integrated Security=true;Initial Catalog=pruebaJose;server=10.10.100.21";
                conexion.Open();
                //SqlCommand cmd = new SqlCommand(consulta, conexion);
                SqlDataAdapter miAdapter = new SqlDataAdapter(consulta, conexion);
                miAdapter.Fill(miDataTable);

            }
            catch (Exception ex)
            {
                return null;
            }

            return miDataTable;
        }

        protected void submit_click(object sender, EventArgs e)
        {

            try
            {

                //SmtpClient server = new SmtpClient("smtp.gmail.com", 587);
                //server.Credentials = new System.Net.NetworkCredential("alejandroagraz@gmail.com", "439665425");
                SmtpClient server = new SmtpClient("VEDCEXCTMP01.OLTPATM.COM", 25);
                server.Credentials = new System.Net.NetworkCredential("Reporte.Operacion", "17M@il*");
                server.EnableSsl = false;
                MailMessage mnsj = new MailMessage();
                System.Text.StringBuilder sb = new System.Text.StringBuilder();

                string[] destinations = Convert.ToString(origin_left.Value).Split(Convert.ToChar(";"));
                // string destinations = Convert.ToString(destination.Value.ToString().Trim());
                string subjects = Convert.ToString(subject.Value.ToString().Trim());
                string attacheds = Convert.ToString(attached.Value.ToString().Trim());
                string messages = Convert.ToString(message.Value.ToString().Trim());

                if ((destination.Value != "") && (subjects != "") && (messages != ""))
                {
                    for (int i = 0; i < destinations.Length; i++)
                    {
                        if (Convert.ToString(destinations[i]) != "")
                        {
                            
                            mnsj.CC.Add(new MailAddress(Convert.ToString(destinations[i])));
                        }
                    }

                    mnsj.To.Add(new MailAddress("alejandroagraz@gmail.com"));
                    mnsj.From = new MailAddress("alejandroagraz@gmail.com", "Mensaje de prueba");
                    mnsj.Subject = Convert.ToString(subjects);
                    mnsj.Body = Convert.ToString(messages);
                    //mnsj.Attachments.Add(new Attachment(attacheds));

                }
                else
                {
                     
                    sb.Append("<script type = 'text/javascript'>window.onload=function(){alert('");
                    sb.Append("No existen destinatarios configurados 404.");
                    sb.Append("')};</script>");
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "alert", sb.ToString());
                    return;
                }

                server.Send(mnsj);

                sb.Append("<script type = 'text/javascript'>window.onload=function(){alert('");
                sb.Append("Correo enviado.");
                sb.Append("')};</script>");
                ClientScript.RegisterClientScriptBlock(this.GetType(), "alert", sb.ToString());
                return;

            } catch (Exception ex) {

                System.Text.StringBuilder sb = new System.Text.StringBuilder();
                sb.Append("<script type = 'text/javascript'>window.onload=function(){alert('");
                sb.Append("Error al enviar correo." + ex.Message);
                sb.Append("')};</script>");
                ClientScript.RegisterClientScriptBlock(this.GetType(), "alert", sb.ToString());
                return;

            }

        }

       

        protected void Page_Load(object sender, EventArgs e)
        {
            if(!IsPostBack) {

                DataTable miDataTable = devolverDestinatarios("1024", "reporte de operacion");
                System.Text.StringBuilder sb = new System.Text.StringBuilder();


                if ((miDataTable != null) && (miDataTable.Rows.Count > 0))
                {
                    subject.Value = Convert.ToString(miDataTable.Rows[0]["asunto"]);
                    message.Value = Convert.ToString(miDataTable.Rows[0]["mensaje"]);
                    user.Value = "Login User";
                                        
                    for (int i = 0; i < miDataTable.Rows.Count; i++)
                    {
                        destination.Value += Convert.ToString(miDataTable.Rows[i]["email"]) + ";";
                        origin_left.Items.Add(new ListItem(miDataTable.Rows[i]["email"].ToString(), miDataTable.Rows[i]["email"].ToString()));
                        destination_cc.Value += Convert.ToString(miDataTable.Rows[i]["carbon_copy"]) + ";";
                        origin_left_inactive_two.Items.Add(new ListItem(miDataTable.Rows[i]["carbon_copy"].ToString(), miDataTable.Rows[i]["carbon_copy"].ToString()));
                    }
                }
                else
                {
                    sb.Append("<script type = 'text/javascript'>window.onload=function(){alert('");
                    sb.Append("No existen destinatarios configurados 404.");
                    sb.Append("')};</script>");
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "alert", sb.ToString());
                    return;
                }
        
            }
        }

    } // end _Default
} // end redactarCorreo