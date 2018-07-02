once the user is logged in:

    [ ] session records the user id



on the app view:

    [ ] div - create a secret (build a form)
	[ ] route - post./secret
		[ ] Secret.create()



[ ] div - display all Secrets

	[ ] each secret should be a link,
	    [ ] ROUTE: the link leads to a view get./secrets/:secret_id
	        [ ] form to add comment to a secret
	        [ ] ROUTE: POST./comment
	[ ] if (Secret._user._id == current user) { show delete option }



misc:

    [ ] logout link/route
    [ ] home link/route
    [ ] discard useless info from secrets before adding it to session (in get/secrets route)