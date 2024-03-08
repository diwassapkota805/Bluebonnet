########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Diwas Sapkota
SID = 1001900767
EMAIL = dxs0767@mavs.uta.edu
SEMESTER = SPRING2024
HE_PARTNERS = Dylan Baes, Bishal Girif, Josue Gomez, Ismael Tovar
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(HE_PARTNERS)
submit:
	zip -r "submission_$(SEMESTER)_$(SID)_$(NAME).zip" .


cleanup:
	@rm -f .DS_Store
	@rm -f */.DS_Store

