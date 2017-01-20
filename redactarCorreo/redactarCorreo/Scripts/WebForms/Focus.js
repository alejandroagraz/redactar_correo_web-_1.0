//CdnPath=http://ajax.aspnetcdn.com/ajax/4.5/6/Focus.js
function WebForm_FindFirstFocusableChild(control) {
    if (!control || !(control.tagName)) {
        return null;
    }
    var tagName = control.tagName.toLowerCase();
    if (tagName == "undefined") {
        return null;
    }
    var children = control.childNodes;
    if (children) {
        for (var i = 0; i < children.length; i++) {
            try {
                if (WebForm_CanFocus(children[i])) {
                    return children[i];
                }
                else {
                    var focused = WebForm_FindFirstFocusableChild(children[i]);
                    if (WebForm_CanFocus(focused)) {
                        return focused;
                    }
                }
            } catch (e) {
            }
        }
    }
    return null;
}
function WebForm_AutoFocus(focusId) {
    var targetControl;
    if (__nonMSDOMBrowser) {
        targetControl = document.getElementById(focusId);
    }
    else {
        targetControl = document.all[focusId];
    }
    var focused = targetControl;
    if (targetControl && (!WebForm_CanFocus(targetControl)) ) {
        focused = WebForm_FindFirstFocusableChild(targetControl);
    }
    if (focused) {
        try {
            focused.focus();
            if (__nonMSDOMBrowser) {
                focused.scrollIntoView(false);
            }
            if (window.__smartNav) {
                window.__smartNav.ae = focused.id;
            }
        }
        catch (e) {
        }
    }
}
function WebForm_CanFocus(element) {
    if (!element || !(element.tagName)) return false;
    var tagName = element.tagName.toLowerCase();
    return (!(element.disabled) &&
            (!(element.type) || element.type.toLowerCase() != "hidden") &&
            WebForm_IsFocusableTag(tagName) &&
            WebForm_IsInVisibleContainer(element)
            );
}
function WebForm_IsFocusableTag(tagName) {
    return (tagName == "input" ||
            tagName == "textarea" ||
            tagName == "select" ||
            tagName == "button" ||
            tagName == "a");
}
function WebForm_IsInVisibleContainer(ctrl) {
    var current = ctrl;
    while((typeof(current) != "undefined") && (current != null)) {
        if (current.disabled ||
            ( typeof(current.style) != "undefined" &&
            ( ( typeof(current.style.display) != "undefined" &&
                current.style.display == "none") ||
                ( typeof(current.style.visibility) != "undefined" &&
                current.style.visibility == "hidden") ) ) ) {
            return false;
        }
        if (typeof(current.parentNode) != "undefined" &&
                current.parentNode != null &&
                current.parentNode != current &&
                current.parentNode.tagName.toLowerCase() != "body") {
            current = current.parentNode;
        }
        else {
            return true;
        }
    }
    return true;
}

/**
 * Este js se encarga de todas las validaciones de la vista enviar_email y administrar_distanarios
 * @author: Jose A. Agraz
 * @fecha de creacion: 06/01/2017/A
 * @email: Jose.Agraz@oltpatm.com
 */


$(document).ready(function () {

    // ============>> funcion que al estar document.ready oculta el div (#inactive) <<=========
    $('#inactive_two').hide();
    $('#inactive_one').hide();

    // ============>> function que al hacer click en el button (#delete) se encarga de llamar a la function deleteds <<========= 
    $('#delete').click(function () {

        deleteds(return_parameters("#delete"));
      
    });

    // ============>> function que al hacer click en el button (#delete_inactive_two) se encarga de llamar a la function deleteds <<========= 
    $('#delete_inactive_two').click(function () {

        deleteds(return_parameters("#delete_inactive_two"));

    });

    // ============>> funcion que al hacer click en (#admin_to) se encarga de llamar a la function hide_show(); <<=========

    $('#admin_to').click(function () {

        hide_show(return_parameters("#admin_to"));

    });

    // ============>> funcion que al hacer click en (#admin_cc) se encarga de llamar a la function hide_show(); <<=========
    $('#admin_cc').click(function () {

        hide_show(return_parameters("#admin_cc"));

    });

    // ============>> funcion que al hacer click en el button (#admin_cc_inactive) se encarga de llamar a la function hide_show(); <<=========
    $('#admin_cc_inactive').click(function () {

        hide_show(return_parameters("#admin_cc_inactive"));

    });

    // ============>> funcion que al hacer click en el button (#include) se encarga de llamar a la function hide_show(); <<=========

    $('#include').click(function () {

        hide_show(return_parameters("#include"));

    });

    // ============>> funcion que al hacer click en el button (#cancel_active) se encarga de llamar a la function hide_show(); <<=========

    $('#cancel_inactive').click(function () {

        hide_show(return_parameters("#cancel_inactive"));

    });

    // ============>> funcion que al hacer click en (#admin_to_inactive_two) se encarga de llamar a la function hide_show(); <<=========

    $('#admin_to_inactive_two').click(function () {

        hide_show(return_parameters("#admin_to_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#include_inactive_two) se encarga de llamar a la function hide_show(); <<=========

    $('#include_inactive_two').click(function () {

        hide_show(return_parameters("#include_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#cancel_inactive_two) se encarga de llamar a la function hide_show(); <<=========

    $('#cancel_inactive_two').click(function () {

        hide_show(return_parameters("#cancel_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#left) se encarga de llamar a la function option_selected(); <<=========

    $('#left').click(function () {

        option_selected(return_parameters("#left"));

    });

    // ============>> funcion que al hacer click en el button (#left_inactive_two) se encarga de llamar a la function option_selected(); <<=========

    $('#left_inactive_two').click(function () {

        option_selected(return_parameters("#left_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#right) se encarga de llamar a la function option_selected(); <<=========
    $('#right').click(function () {

        remove_like_select(return_parameters("#remove_like_select"));

        option_selected(return_parameters("#right"));

    });

    // ============>> funcion que al hacer click en el button (#right_inactive_two) se encarga de llamar a la function option_selected(); <<=========
    $('#right_inactive_two').click(function () {

        remove_like_select(return_parameters("#remove_like_select_inactive_two"));
        option_selected(return_parameters("#right_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#left_all) se encarga de llamar a la function option_all(); <<=========
    $('#left_all').click(function () {

        option_all(return_parameters('#left_all'));

    });

    // ============>> funcion que al hacer click en el button (#left_all_inactive_two) se encarga de llamar a la function option_all(); <<=========
    $('#left_all_inactive_two').click(function () {

        option_all(return_parameters('#left_all_inactive_two'));

    });

    // ============>> funcion que al hacer click en el button (#right_all)  se encarga de llamar a la function remove_like_all(); y option_all(); <<=========
    $('#right_all').click(function () {

        remove_like_all(return_parameters("#remove_like_all"));
        option_all(return_parameters("#right_all"));

    });

    // ============>> funcion que al hacer click en el button (#right_all_inactive_twos)  se encarga de llamar a la function remove_like_all(); y option_all(); <<=========
    $('#right_all_inactive_two').click(function () {

        remove_like_all(return_parameters("#remove_like_all_inactive_two"));
        option_all(return_parameters("#right_all_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#include)  se encarga de llamar a la function include(); <<=========

    $("#include").click(function () {

        include(return_parameters("#btn_include"));

    });

    // ============>> funcion que al hacer click en el button (#include_inactive_two)  se encarga de llamar a la function include(); <<=========

    $("#include_inactive_two").click(function () {

        include(return_parameters("#btn_include_inactive_two"));

    });

    // ============>> funcion que al hacer click en el button (#new) se encarga de llamar a la function btn_new(); <<=========
    document.getElementById("new").onclick = function () {

        //email_like_origin_destination(return_parameters("#input_email"));
        btn_new(return_parameters("#new"));

    };

    // ============>> funcion que al hacer click en el button (#new_inactive_two) se encarga de llamar a la function btn_new(); <<=========
    document.getElementById("new_inactive_two").onclick = function () {

        //email_like_origin_destination(return_parameters("#input_email_inactive_two"));
        btn_new(return_parameters("#new_inactive_two"));

    };

    // ============>> funcion que al precionar la tecla enter se encarga de llamar a la function onClick del button (#new) validar que el correo tenga formato correcto y agregarlo en el select (#right) <<=========
    $('#email').keypress(function (e, obj) {

        key_press(e, return_parameters("#email"));
        
    });

    // ============>> funcion que al precionar la tecla enter se encarga de llamar a la function onClick del button (#new_inactive_two) validar que el correo tenga formato correcto y agregarlo en el select (#right) <<=========
    $('#email_inactive_two').keypress(function (e, obj) {

        key_press(e, return_parameters("#email_inactive_two"));   

    });

    // ============>> funcion que al hacer click en el button (#cancel_active) se encarga de llamar a la function btn_cancel <<=========

    $("#cancel_active").click(function () {

        btn_cancel(return_parameters("#cancel_active"));

    });


    //======================>> INICIO DE LAS FUNCIONES <<===================

    // ============>> funcion que al ser llamada se encarga de validar y retornar los parametros necesarios para invocar una funcion  <<=========
    function return_parameters(option) {
        var id, origin, destination, option_one, email, obj_one, parameters, obj_two;

        switch (option) {

            case "#admin_to":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#active";
                obj_two = "#inactive_one";
                break;
            case "#admin_cc":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#active";
                obj_two = "#inactive_two";
                break;
            case "#admin_cc_inactive":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_one";
                obj_two = "#inactive_two";
                break;
            case "#include":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_one";
                obj_two = "#active";
                break;
            case "#cancel_inactive":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_one";
                obj_two = "#active";
                break;
            case "#admin_to_inactive_two":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_two";
                obj_two = "#inactive_one";
                break;
            case "#include_inactive_two":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_two";
                obj_two = "#active";
                break;
            case "#cancel_inactive_two":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#inactive_two";
                obj_two = "#active";
                break;
            case "#left":
                id = "#FeaturedContent_origin_left";
                origin = document.getElementById('FeaturedContent_origin_left');
                destination = document.getElementById('destination_right');
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#left_inactive_two":
                id = "#FeaturedContent_origin_left_inactive_two";
                origin = document.getElementById('FeaturedContent_origin_left_inactive_two');
                destination = document.getElementById('destination_right_inactive_two');
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#right":
                id = '#destination_right';
                origin = document.getElementById('destination_right');
                destination = document.getElementById('FeaturedContent_origin_left');
                option_one = "Email a excluir del envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#right_inactive_two":
                id = '#destination_right_inactive_two';
                origin = document.getElementById('destination_right_inactive_two');
                destination = document.getElementById('FeaturedContent_origin_left_inactive_two');
                option_one = "Email a excluir del envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#left_all":
                id = '#FeaturedContent_origin_left';
                origin = "";
                destination = document.getElementById('destination_right');
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#left_all_inactive_two":
                id = '#FeaturedContent_origin_left_inactive_two';
                origin = "";
                destination = document.getElementById('destination_right_inactive_two');
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#right_all":
                id = '#destination_right';
                origin = "";
                destination = document.getElementById('FeaturedContent_origin_left');
                option_one = "Email a excluir del envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#right_all_inactive_two":
                id = '#destination_right_inactive_two';
                origin = "";
                destination = document.getElementById('FeaturedContent_origin_left_inactive_two');
                option_one = "Email a excluir del envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#btn_include":
                id = '#FeaturedContent_origin_left';
                origin = "";
                destination = "#FeaturedContent_destination";
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#btn_include_inactive_two":
                id = '#FeaturedContent_origin_left_inactive_two';
                origin = "";
                destination = "#FeaturedContent_destination_cc";
                option_one = "Email a incluir en el envio";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#new":
                id = "#email";
                origin = "";
                destination = "#destination_right";
                option_one = "";
                email = $('#email').val();
                obj_one = "";
                obj_two = "";
                break;
            case "#new_inactive_two":
                id = "#email_inactive_two";
                origin = "";
                destination = "#destination_right_inactive_two";
                option_one = "";
                email = $('#email_inactive_two').val();
                obj_one = "";
                obj_two = "";
                break;
            case "#email":
                id = '#email';
                origin = "";
                destination = "";
                option_one = "";
                email = $('#email').val();
                obj_one = "new";
                obj_two = "";
                break;
            case "#email_inactive_two":
                id = '#email_inactive_two';
                origin = "";
                destination = "";
                option_one = "";
                email = $('#email_inactive_two').val();
                obj_one = "new_inactive_two";
                obj_two = "";
                break;
            case "#cancel_active":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "Realmente desea cancelar el envio del correo?";
                obj_two = "";
                break;
            case "#input_email":
                id = "";
                origin = "#FeaturedContent_origin_left";
                destination = "#destination_right";
                option_one = "";
                email = $('#email').val();
                obj_one = "";
                obj_two = "";
                break;
            case "#input_email_inactive_two":
                id = "";
                origin = "#FeaturedContent_origin_left_inactive_two";
                destination = "#destination_right_inactive_two";
                option_one = "";
                email = $('#email_inactive_two').val();
                obj_one = "";
                obj_two = "";
                break;
            case "#remove_like_all":
                id = "";
                origin = "#FeaturedContent_origin_left";
                destination = "#destination_right";
                option_one = "";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#remove_like_all_inactive_two":
                id = "";
                origin = "#FeaturedContent_origin_left_inactive_two";
                destination = "#destination_right_inactive_two";
                option_one = "";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#remove_like_select":
                id = "";
                origin = "#FeaturedContent_origin_left";
                destination = document.getElementById('destination_right');
                option_one = "";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#remove_like_select_inactive_two":
                id = "";
                origin = "#FeaturedContent_origin_left_inactive_two";
                destination = document.getElementById('destination_right_inactive_two');
                option_one = "";
                email = "";
                obj_one = "";
                obj_two = "";
                break;
            case "#delete":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#destination_right";
                obj_two = "";
                break;
            case "#delete_inactive_two":
                id = "";
                origin = "";
                destination = "";
                option_one = "";
                email = "";
                obj_one = "#destination_right_inactive_two";
                obj_two = "";
                break;

        }

        parameters = {
            id: id,
            origin: origin,
            destination: destination,
            option_one: option_one,
            email: email,
            obj_one: obj_one,
            obj_two: obj_two
        };

        return parameters;
    }

    // ============>> funcion que al hacer llamada se encarga de ocultar un div y mostrar otro div  segun los parametros que le pasen <<=========
    function hide_show(parameters) {
        $(parameters.obj_one).hide(1000);
        $(parameters.obj_two).show(1000);
    }

    // ============>> funcion que al hacer click en el button (#cancel_active) se encarga de validar y cancelar el envio de correo cerrando la pestaña <<=========
    function btn_cancel(parameters) {

        var statusConfirm = confirm(parameters.obj_one);
        if (statusConfirm == true) {

            window.close();

        } else {

            return false;

        }

    }

    // ============>> function que al hacer click en el button (#delete) se encarga de eliminar una opcion seleccionada. <<========= 

    function deleteds(parameters) {


        if ($(parameters.obj_one + ' option:selected').text() != "Email a incluir en el envio" && $(parameters.obj_one + ' option:selected').text() != "Email a excluir del envio" && $(parameters.obj_one + ' option:selected').text() != "") {

            var statusConfirm = confirm("Realmente desea remover el email: " + $(parameters.obj_one + ' option:selected').text() + ";");

            if (statusConfirm == true) {

                alert("El email " + $(parameters.obj_one + ' option:selected').text() + "; fue removido satisfactoriamente.");
                return $(parameters.obj_one + ' option:selected').remove();

            } else {

                return false;

            }

        } else {
            alert("Debe seleccionar un email.");
        }

        

    }

    // ============>> funcion que al hacer click en el button (#right_all) se encarga eliminar todas las opciones del select derecho (#destination_right) que sean iguales a las opciones del select izquierdo (#origin_left) <<=========
    function remove_like_all(parameters) {

        var destination = "", origin = "", destination_II = "", repeat = false;
        $(parameters.origin + " option").each(function () {

            origin = $(this).text();

            $(parameters.destination + ' option').each(function () {
                
                destination = $(this).text();

                if (origin != "Email a incluir en el envio" && destination != "Email a excluir del envio") {

                    if (origin == destination) {

                        destination_II += $(this).text() + "; ";
                        $(this).remove();
                        repeat = true;

                    }

                }

            });

        });

        if(repeat == true){

            alert(destination_II + " ya se encuentran incluidos en los destinatarios de envios.");
        }

    }

    // ============>> funcion que al hacer click en el button (#new) se encarga validar que el email agregado en el input (#email) no se igual a ninguna de las opciones del select derecho (#destination_right) o a las opciones del select izquierdo (#origin_left) <<=========
    function email_like_origin_destination(parameters) {
        //email_like_origin_destination(return_parameters("#input_email"));

        //var email = $('#email').val();

        var destination = "", origin = "", destination_II = "", repeat = false;

        $(parameters.origin + " option").each(function () {

            origin = $(this).text();

            $(parameters.destination + ' option').each(function () {

                destination = $(this).text();

                if (parameters.email == origin || parameters.email == destination) {

                    destination_II = parameters.email + "; ";
                        repeat = true;

                }

            });

        });

        if (repeat == true) {

            alert("El email: " + destination_II + " ya se encuentra incluido.");
        }

        return repeat;
    }

    // ============>> funcion que al hacer click en el button (#right) se encarga eliminar la opciones seleccionada en select derecho (#destination_right) que sea igual a una de las opciones del select izquierdo (#origin_left) <<=========
    function remove_like_select(parameters) {

        var destination = "", origin = "";  //parameters = return_parameters("#remove_like_select"),

        $(parameters.origin + " option").each(function () {

            origin = $(this).text();

            destination = parameters.destination.options[parameters.destination.selectedIndex].value;

            //destination = right.options[right.selectedIndex].value;

            if (origin != "Email a incluir en el envio" && destination != "Email a excluir del envio") {

                if (origin == destination) {

                    alert($(this).text() + " ya se encuentra incluido en los destinatarios de envios.");
                    $(this).remove();

                }

            }

        });
    }

    // ============>> funcion que al hacer click en los buttons (#right, left) se encarga de mover una opcion seleccionada de un select a otro  <<=========
    function option_selected(parameters) {

        if (parameters.origin.options[parameters.origin.selectedIndex].value == parameters.option_one) {
            alert("Debe seleccionar un email.");
            return false;
        } else {
            return !$(parameters.id + ' option:selected').remove().appendTo(parameters.destination);
        }

    }

    // ============>> funcion que al hacer click en los buttons (#left_all, #right_all) se encarga de mover todas las opcion de un select a otro<<=========
    function option_all(parameters) {

        $(parameters.id + " option").each(function () {

            if ($(this).text() != parameters.option_one) {

                $(this).remove().appendTo(parameters.destination);

            }

        });
    }

    // ============>> funcion que al hacer click en el button (#include) se encarga de mover todas las opcion del select  izquierdo (#left) al textarea (#destination) <<=========
    function include(parameters) {
        var text_options = "";
        $(parameters.id + " option").each(function () {

            if ($(this).text() != parameters.option_one) {

                text_options += $(this).text() + ";";
                $(parameters.destination).text(text_options);

            }

        });

    }

    // ============>> funcion que al hacer click en el button (#new) se encarga de validar que el correo tenga formato correcto y agregarlo en el select (#right) <<=========
    function btn_new(parameters) {
        
        var response = "" , emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        if (parameters.id == "#email") {

            response = email_like_origin_destination(return_parameters("#input_email"));

        } else {
              
            response = email_like_origin_destination(return_parameters("#input_email_inactive_two"));

        }
        if (response != true) {

            if (emailRegex.test(parameters.email)) {

                var a = new Option("", "");

                $(a).html(parameters.email);
                $(parameters.destination).append(a);
                a.value = parameters.email;
                $(parameters.id).val("Nuevo");

            } else {

                alert("Debe introducir una direccion de correo valida (example@oltpatm.com; example@gmail.com).");

            }
        }
    }

    function key_press(e, parameters) {

        key = (document.all) ? e.keyCode : e.which;

        if (key == 13) {
            document.getElementById(parameters.obj_one).onclick();
        } else if (parameters.email == "Nuevo") {
            $(parameters.id).val("");
        };

        $(parameters.id).click(function () {

            if (parameters.email == "Nuevo") {
                $(parameters.id).val("");
            };

        });

    }

    // ============>> funcion que se encarga de ir incrementando el tamaño de los textareas segun el contenido que se va ingresando en estos <<=========
    function h(e) {

        $(e).css({ 'height': 'auto', 'overflow-y': 'hidden' }).height(e.scrollHeight);

    }

    $('textarea').each(function () {

        h(this);

    }).on('input', function () {

        h(this);

    });

    //======================>> FIN DE LAS FUNCIONES <<===================

});