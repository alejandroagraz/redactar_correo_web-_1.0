<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="redactarCorreo._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">

    <asp:Label runat="server" ID="mensaje"> </asp:Label>   

    <link href="media/css/bootstrap.css" type="text/css" rel="Stylesheet" />
    <link href="media/css/style_email.css" type="text/css" rel="Stylesheet" />
    
    <script src="media/js/js_email.js"></script>
    
                <div class="well well-sm" id="active" >
    
                        <div class="list-group-item active" >
                            <span class="glyphicon glyphicon-envelope" id="Span1"></span>
                            <center> Redactar Correo </center>
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon-user"></span>Usuario:
                                <input runat="server" id="user" name="user" type="text" placeholder=" Login" class="input" readonly="readonly" >
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon-book"></span> Para: 
                                <textarea runat="server" id="destination" name="destination" class="form-control" readonly="readonly" ></textarea> 
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon-subtitles"></span> Cc: 
                            <textarea runat="server" id="destination_cc" name="destination_cc" class="form-control" readonly="readonly" ></textarea> 
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon-pencil"></span> Asunto: 
                                <input runat="server" id="subject" name="subject" type="text" placeholder=" Asunto" class="input" >
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon glyphicon-link"></span> Adjunto: 
                                <input runat="server" id="attached" name="attached" type="text" placeholder=" Adjuntar Archivo" class="input" >
                        </div>

                        <div  class="list-group-item">
                            <span class="glyphicon glyphicon-comment"></span> Redactar:
                                <textarea runat="server" id="message" name="message" class="form-control" placeholder="Aca debe incluir el cuerpo del mensaje..." ></textarea>
                        </div>

                        <div id="button_active">

                            <button type="submit" runat="server" onserverclick="submit_click" id="submitClick" class="btn btn-success btn-sm" > <span class="glyphicon glyphicon-floppy-disk"> Guardar </span> </button>
                            <button type="button" id="admin_to" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-cog"> Para </span> </button>
                            <button type="button" id="admin_cc" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-cog"> Cc </span> </button>
                            <button type="button" id="cancel_active" class="btn btn-warning btn-sm"> <span class="glyphicon glyphicon-remove-circle"> Cancelar </span> </button>

                        </div>

                </div>


                <div id="inactive_one">

                    <div class="well well-sm" id="admin_destination">

                        <div class="list-group-item list-group-item-success" >
                            <span class="glyphicon glyphicon-wrench" id="Span2"></span>
                            <center> Administrar Destinatarios </center>
                        </div>

                        <div id="select_origin_left">

                            <select id="origin_left" runat="server" size="12" >
                                <option value="Email a incluir en el envio" disabled selected>Email a incluir en el envio</option>
                            </select>
                                             
                        </div>

                        <div class="well well-sm" id="button_inactive_one">
                            <button type="button" id="left" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-hand-right"> Mover </span> </button>
                            <button type="button" id="right" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-hand-left"> Mover </span> </button> <br />
                            <button type="button" id="left_all" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-hand-right"> Todos </span> </button>
                            <button type="button" id="right_all" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-hand-left"> Todos </span> </button>
                        </div>

                        <div id="select_destination_right">
                            <%--<asp:ListBox runat="server" ID="destination_right" />--%>
                                          
                            <select name="destination_right[]" id="destination_right" size="12" >
                                <option value="Email a excluir del envio" disabled selected>Email a excluir del envio</option>
                            </select>
                        </div>
                        
                    </div>
                    
                    <div class="well well-sm" id="button_inactive_two">

                        <input type="email" id="email" name="email" placeholder="                         example@oltpatm.com" size="50" autofocus="autofocus" /> <br />

                        <button type="button" id="new" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-plus-sign"> Nuevo </span> </button>
                        <button type="button" id="include" class="btn btn-success btn-sm"> <span class="glyphicon glyphicon-ok-circle"> Agregar </span> </button>
                        <button type="button" id="admin_cc_inactive" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-cog"> Cc </span> </button>
                        <button type="button" id="cancel_inactive" class="btn btn-warning btn-sm"> <span class="glyphicon glyphicon-remove-circle"> Cancelar </span> </button>
                        <button type="button" id="delete" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-trash"> Delete </span> </button><br />

                    </div>

                </div>

                <div id="inactive_two">

                    <div class="well well-sm" id="admin_destination_inactive_two">

                        <div class="list-group-item list-group-item-info" >
                            <span class="glyphicon glyphicon-wrench" id="Span3"></span>
                            <center> Administrar Cc (Carbon Copy) </center>
                        </div>

                        <div id="select_origin_left_inactive_two">

                            <select id="origin_left_inactive_two" runat="server" size="12" >
                                <option value="Email a incluir en el envio" disabled selected>Email a incluir en el envio</option>
                            </select>
                                             
                        </div>

                        <div class="well well-sm" id="button_inactive_one_inactive_two">
                            <button type="button" id="left_inactive_two" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-hand-right"> Mover </span> </button>
                            <button type="button" id="right_inactive_two" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-hand-left"> Mover </span> </button> <br />
                            <button type="button" id="left_all_inactive_two" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-hand-right"> Todos </span> </button>
                            <button type="button" id="right_all_inactive_two" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-hand-left"> Todos </span> </button>
                        </div>

                        <div id="select_destination_right_inactive_two">
                                          
                            <select name="destination_right[]" id="destination_right_inactive_two" size="12" >
                                <option value="Email a excluir del envio" disabled selected>Email a excluir del envio</option>
                            </select>

                        </div>
                        
                    </div>
                    
                    <div class="well well-sm" id="button_inactive_two_inactive_two">

                        <input type="email" id="email_inactive_two" name="email_inactive_two" placeholder="                         example@oltpatm.com" size="50" autofocus="autofocus" /> <br />

                        <button type="button" id="new_inactive_two" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-plus-sign"> Nuevo </span> </button>
                        <button type="button" id="include_inactive_two" class="btn btn-success btn-sm"> <span class="glyphicon glyphicon-ok-circle"> Agregar </span> </button>
                        <button type="button" id="admin_to_inactive_two" class="btn btn-primary btn-sm"> <span class="glyphicon glyphicon-cog"> Para </span> </button>
                        <button type="button" id="cancel_inactive_two" class="btn btn-warning btn-sm"> <span class="glyphicon glyphicon-remove-circle"> Cancelar </span> </button>
                        <button type="button" id="delete_inactive_two" class="btn btn-danger btn-sm"> <span class="glyphicon glyphicon-trash"> Delete </span> </button><br />

                    </div>

                </div>
                


</asp:Content>
