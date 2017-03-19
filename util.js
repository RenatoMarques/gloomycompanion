
function shuffle_list(l)
{
    for (var i = 0; i < l.length; i++)
    {
        var switch_index = Math.floor(Math.random() * l.length);
        var tmp = l[switch_index];
        l[switch_index] = l[i];
        l[i] = tmp;
    }
}

function clear_list(list)
{
    list.splice(0, -1);
    return list;
}

function toggle_class(element, class_name, enable_class)
{
    if (enable_class)
    {
        element.classList.add(class_name);
    }
    else
    {
        element.classList.remove(class_name);
    }
}

function remove_child(myNode)
{
    while (myNode.firstChild)
    {
        myNode.removeChild(myNode.firstChild);
    }
}

function create_button(type, id, value)
{
    var button = document.createElement("input");
    button.type = type;
    button.id = id;
    button.value = value;

    return button;
}

function dict_values(dict)
{
    var values = [];
    for (key in dict) {
        values.push(dict[key]);
    }
    return values;
}

function concat_arrays(arrays)
{
    return Array.prototype.concat.apply([], arrays);
}

function is_checked(input)
{
    return (('checked' in input) ? input.checked : false);
}

function input_value(input)
{
    return (('value' in input) ? input.value : '');
}
