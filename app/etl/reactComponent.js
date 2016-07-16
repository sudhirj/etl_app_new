
	var MYREACTCOMP=React.createClass({displayName:'MYREACTCOMP',mixins: [React.Animate],
	render:function(){
	
	  var data = this.props.myname;
	  var toClass = {}.toString
	  var thead = React.DOM.thead({},
            React.DOM.tr({},
			React.DOM.th(null, 'S.No'),
			React.DOM.th(null, 'Created At'),
			React.DOM.th(null, 'Ip Address'),
			React.DOM.th(null, 'latitude'),
			React.DOM.th(null, 'longitude'),
			React.DOM.th(null, 'firstname'),
			React.DOM.th(null, 'last name'),
			React.DOM.th(null, 'Email Id')
                ));
				var count=1;
	  var rows = data.map(function(datum) {
                var clickHandler = function(ev){
                    console.log("Still in reactJs");
                    console.log(ev);
                }
				

                return (
                  React.DOM.tr( {onClick:clickHandler},
					React.DOM.td(null, count++),
                    React.DOM.td(null, datum.created_at),
                    React.DOM.td(null, datum.ip),
                    React.DOM.td(null, datum.latitude),
                    React.DOM.td(null, datum.longitude),
                    React.DOM.td(null, datum.first_name),
					React.DOM.td(null, datum.last_name),
					React.DOM.td(null, datum.email)
                  )
                );
              });
			  
			 var bodys= React.DOM.tbody({},rows);
			  
			  return (
                React.DOM.table(null,
                 [thead, bodys]
                )
              );
	  	}});