class gin {
	constructor(name, volume, botanical, country) {
		this._name = name;
		this._volume = volume;
		this._botanical = botanical;
		this._country = country;
	}

	get name() {
		return this._name;
	}

	get volume() {
		return this._volume;
	}

	get botanical() {
		return this._botanical;
	}

	get country() {
		return this._country;
	}
}

const aviationGin = new gin('Aviaton', '42%', ["Anise Seed", "Cardamom", "Coriander", "Juniper", "Lavender", "Orange Peel", "Sarsaparilla"], 'U.S.A');

const beefeaterGin = new gin('Beefeater', '40%', ["Almond", "Angelica Root", "Angelica Seed", "Coriander Seed", "Juniper", "Lemon Peel", "Liquorice Root", "Orange Peel", "Orris Root"], 'England');

const bolsGenever = new gin('Bols Genever Gin', '42%', ["Angelica Root", "Ginger", "Hops", "Juniper", "Liquorice"], 'Netherlands');

const bombaySapphire = new gin('Bombay Sapphire', '40%', ["Almonds", "Angelica", "Cassia", "Cubeb", "Coriander", "Grains of Paradise", "Lemon", "Liquorice", "Juniper", "Orris Root"], 'England');

const theBotanist = new gin('The Botanist', '46%', ["Angelica", "Apple Mint", "Birch", "Bog Myrtle leaves", "Cassia bark", "Chamomile", "Cinnamon", "Coriander", "Creeping Thistle flowers", "Elderflower", "Gorse flowers", "Heather flowers", "Hawthorn flowers", "Juniper", "Lady’s Bedstraw flowers", "Lemon", "Lemon peel", "Liquorice", "Meadow Sweet", "Orange", "Orris root", "Peppermint", "Mugwort leaves", "Red Clover flowers", "Sweet Cicely leaves", "Tansy Thyme leaves", "Water Mint leaves", "White Clover", "Wood Sage leaves"], 'Scotland')

const caorunnGin = new gin('Caorunn','41.8%', ["Angelica", "Bog Myrtle", "Cassia Bark", "Coriander Seed", "Coul Blush Apple", "Dandelion Leaf", "Heather", "Juniper", "Lemon Peel", "Orange Peel", "Rowan Berry"], 'Scotland');

const haymansOldTom = new gin('Hayman\'s Old Tom Gin', '40%', ["Angelica", "Cassia Bark", "Cinnamon", "Coriander", "Juniper", "Lemon peel", "Liquorice", "Nutmeg", "Orange peel", "Orris root"], 'England')

const hendricksGin = new gin('Hendrick\'s Gin', '41.4%', ["Angelica Root", "Caraway Seed", "Chamomile", "Coriander", "Cubeb", "Elderflower", "Grains of Paradise", "Juniper", "Lemon Peel", "Orange Peel", "Orris Root", "Yarrow"], 'Scotland');

const monkey47 = new gin('Monkey 47', '47%', ["Acacia", "Acorus Calamus", "Almond", "Angelica", "Bitter Orange", "Blackberry", "Cardamom", "Cassia", "Chamomile", "Cinnamon", "Citron Verbena", "Cloves", "Coriander", "Cranberries", "Cubeb", "Dog Rose", "Elderflower", "Ginger", "Grains Of Paradise", "Hawthorne Berries", "Hibiscus Abelmoshus", "Hibiscus Syriacus", "Honeysuckle", "Jasmine", "Juniper", "Kaffir Lime", "Lavender", "Lemon", "Lemon Balm", "Lemongrass", "Liquorice", "Lingonberries", "Mondara Didyma", "Nutmeg", "Orris Root", "Pimento", "Pomelo", "Rose Hip", "Sage", "Sloe", "Spruce"], 'Germany');

const napueGin = new gin('Napue Gin', '46.3%', ["Angelica", "Birch leaves", "Coriander Seed", "Cranberry", "Juniper", "Lemon Peel", "Lime peel", "Meadowsweet", "Sea buckthorn"], 'Finland')

const plymouthGin = new gin('Plymouth Gin', '41.2%', ["Angelica", "Cardamom Pods", "Coriander", "Dried Lemon", "Juniper", "Orris Root", "Orange Peel"], 'England');

const tanguerayGin = new gin('Tangueray No.10', '47.3%', ["Chamomile", "Coriander", "Juniper", "Lime", "Orange", "White Grapefruit"], 'England');



let pop = $('.butn')

pop.click(function display(button) {

	$('.stagecontent').addClass('show')
	$('.chosenGintext').css("opacity", "1")
	$('.chosengin-load').addClass('chosengin')
	$('.chosengin-load').removeClass('.chosengin-load')

	$('.ingredients li').removeClass('pressed')
	$(this).addClass('pressed')

	button = this.id

	if (button == '1') {
		$('#img').attr("src","img/tangueray.png");
		$('#name').html(tanguerayGin.name);
		$('#volume').html(tanguerayGin.volume);
		$('#country').html(tanguerayGin.country);
		$('#botanicals').html(tanguerayGin.botanical.join(', '));
	} else if (button == '2'){
		$('#img').attr("src","img/napue.png");
		$('#name').html(napueGin.name);
		$('#volume').html(napueGin.volume);
		$('#country').html(napueGin.country);
		$('#botanicals').html(napueGin.botanical.join(', '));
	} else if (button == '3') {
		$('#img').attr("src","img/monkey47.png");
		$('#name').html(monkey47.name);
		$('#volume').html(monkey47.volume);
		$('#country').html(monkey47.country);
		$('#botanicals').html(monkey47.botanical.join(', '));
	} else if (button == '4') {
		$('#img').attr("src","img/hendricks.png");
		$('#name').html(hendricksGin.name);
		$('#volume').html(hendricksGin.volume);
		$('#country').html(hendricksGin.country);
		$('#botanicals').html(hendricksGin.botanical.join(', '));
	} else if (button =='5') {
		$('#img').attr("src","img/caorunn.png");
		$('#name').html(caorunnGin.name);
		$('#volume').html(caorunnGin.volume);
		$('#country').html(caorunnGin.country);
		$('#botanicals').html(caorunnGin.botanical.join(', '));
	} else if (button =='5') {
		$('#img').attr("src","img/thebotanist.png");
		$('#name').html(theBotanist.name);
		$('#volume').html(theBotanist.volume);
		$('#country').html(theBotanist.country);
		$('#botanicals').html(theBotanist.botanical.join(', '));
	} else if (button =='6') {
		$('#img').attr("src","img/beefeater.png");
		$('#name').html(beefeaterGin.name);
		$('#volume').html(beefeaterGin.volume);
		$('#country').html(beefeaterGin.country);
		$('#botanicals').html(beefeaterGin.botanical.join(', '));
	} else if (button =='7') {
		$('#img').attr("src","img/bombay_sapphire.png");
		$('#name').html(bombaySapphire.name);
		$('#volume').html(bombaySapphire.volume);
		$('#country').html(bombaySapphire.country);
		$('#botanicals').html(bombaySapphire.botanical.join(', '));
	} else if (button =='8') {
		$('#img').attr("src","img/aviation.png");
		$('#name').html(aviationGin.name);
		$('#volume').html(aviationGin.volume);
		$('#country').html(aviationGin.country);
		$('#botanicals').html(aviationGin.botanical.join(', '));
	} else {
		return console.log('Something went wrong')
	}
});
