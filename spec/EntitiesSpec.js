describe("Test Man, Student, Professor suite", function () {
	var man;
	var student;
	var professor;
	var skillLevel;
	
	beforeEach( function () {
		man = new Man("John", 40);
		student = new Student("Nigga", 40);
		professor = new Professor();
		skillLevel = professor.skillLevel;
	});

	it( "should distinguish Man", function () {
		expect(duckTypes.call(man)).toEqual('Man');
	});

	it("should distinguish Student", function () {
		expect(duckTypes.call(student)).toEqual('Student');
	});

	describe("Test Man Suite", function () {
		
		it(" should check how long man is living", function () {
			expect(man.live()).toEqual(man.name + " has been living for " + man.age);
		});

		it(" should check  man is alive", function () {
			man.alive = false;
			expect( function () {
				man.live();
			}).toThrowError("Sorry but this guy is gone");
		});

	});

	describe("Test Student Suite", function () {
		
		it(" should check how long student is living", function () {
			expect(student.live()).toEqual(student.name + " has been living for " + student.age);
		});

		it(" should check student is alive", function () {
			student.alive = false;
			expect( function () {
				student.live();
			}).toThrowError("Sorry but this guy is gone");
		});

		it(" should check student is studying", function () {
			expect(student.study()).toEqual(student.name + "is studying");
		});

	});

	describe("Test Professor Suite", function () {
		
		it(" should check can somebody give him name", function () {
			professor.setName("Snoop");
			expect(professor.name).toEqual("Snoop");
		});

		it(" should check somebody forget professor's name", function () {
			expect( function () {
				professor.setName();
			}).toThrowError("Izvinite pojaluista");
		});

		it(" should check professor can update his skills", function () {
			professor.upSkill();
			expect(professor.skillLevel).toEqual(skillLevel + 1);
		});

		it(" should check professor has sense of humor", function () {
			expect(professor.hasSenseOfHumor).toBeFalsy();
		});

		it(" should check professor can make some joke", function () {
			professor.changeHumor();
			expect(professor.hasSenseOfHumor).toBeTruthy();
		});

		describe("Test Professor Math Skills Suite",function () {

			it(" should check professor can add two integer numbers", function () {
				expect(professor.addTwoNumbers(2,2)).toEqual(4);
			});

			it(" should check professor can add two negative numbers", function () {
				expect(professor.addTwoNumbers(-2,-2)).toEqual(-4);
			});

			it(" should check professor can add something to zero", function () {
				expect(professor.addTwoNumbers(2,0)).toEqual(2);
			});
		});
	});

});